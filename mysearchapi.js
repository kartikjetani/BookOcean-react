const got = require("got");
const fs = require('fs')
const express = require("express");
const path = require('path');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express()
const port = 5000;

//branch specific data import
const compJson = require('./api/computer.json');
const eleJson = require('./api/electrical.json');


app.use(cors({
	origin: ['http://localhost:3000', 'http://localhost:5000', 'http://bookocean.epizy.com/', 'http://bookocean.ml', 'http://thewebinside.ml']
}));

//   app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.get('/', (req, res) => {
	res.send("my api World!");
});


app.get('/searchbymd5/:md5', async (req, res) => {
	const option = {
		query: encodeURIComponent(req.params.md5),
		search_in: "md5"
	}
	data = await search(option);
	data[0]["download1"] = await getDownloadLink(req.params.md5)
	res.send(data)
})

app.get('/previewlink/:md5', async (req, res) => {
	let data = {}
	data["previewlink"] = await getPreviewLink(req.params.md5)
	res.send(data)
})

app.get('/title/:title', async (req, res) => {

	const option = {
		query: (req.params.title),
		search_in: "title"
	}
	data = await search(option);
	res.send(data)
})

app.get('/searchbyisbn/:isbn', async (req, res) => {
	const option = {
		query: (req.params.isbn),
		search_in: "identifier"
	}
	data = await search(option);
	res.send(data)
})

app.get('/author/:author', async (req, res) => {
	const option = {
		query: (req.params.author),
		search_in: "author"
	}
	data = await search(option);
	res.send(data)
})

app.get('/publisher/:publisher', async (req, res) => {
	const option = {
		query: (req.params.publisher),
		search_in: "publisher"
	}
	data = await search(option);
	res.send(data)
})

app.get('/auto/:bookname', async function (req, res) {
	const option = {
		query: (req.params.bookname),
		search_in: "def"
	}
	data = await search(option);
	res.send(data)
})

//GTU section 

app.get("/branch-sem/:branch/:sem", async (req, res) => {

	let sem = req.params.sem;
	let branch = req.params.branch;

	console.log(sem);
	if (sem === "sem1") {
		branch="comp"
		console.log("sem1 data");
	}
	switch (branch) {
		case "comp":
			branch_sem_obj = compJson[`${sem}`];
			break;

		case "ele":
			branch_sem_obj = eleJson[`${sem}`];
			break;

		default:
			branch_sem_obj = {}
			break;

	}
try{
	branch_sem_obj["apidata"] = await subWiseJson(sem)
	res.end(JSON.stringify(branch_sem_obj));
}catch(e){
	console.log(e);
}
	
})



// listen to port 5000

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})



// *******************************************
// functions
// **********************************************

async function subWiseJson(sem) {
	let ids = []
	let fullJson = {}
	semObject = compJson[`${sem}`]

	semObject.subjectcode.map(code => {
		semObject[`${code}`].map(id => {
			ids.push(id);
		})
	})
	let bookData = await fetch(`http://libgen.li/json.php?ids=${ids.join(',')}&fields=*`).then(res => res.json()).then(data => data);

	// to find and gather objects according to subject
	semObject.subjectcode.map(code => {
		let subBookData = []

		semObject[`${code}`].map(id => {
			for (let i = 0; i < bookData.length; i++) {
				if (bookData[i].id === id) {
					subBookData.push(bookData[i])
				}
			}
		})

		fullJson[`${code}`] = subBookData;

	})
	return (fullJson)
}

// func to search from libgen 

async function search(options) {

	const fieldsArray = ["title", "md5", "publisher", "author", "identifier", "filesize", "coverurl"]


	try {
		const response = await got(`http://libgen.li/search.php?req=${options.query}&open=0&res=25&view=simple&phrase=1&column=${options.search_in}`);
		const htmlres = response.body;
		var idArray = htmlres.match(/id=[0-9]+/g)

		// console.log(idArray)
		if (idArray == null) {
			return {}
		}
	} catch (error) {
		console.log(error.response.body);
	}
	for (let i = 0; i < idArray.length; i++) {
		idArray[i] = idArray[i].substring(3);
	}
	console.log(idArray.length + " Results found");


	let bookData = await fetch(`http://libgen.li/json.php?ids=${idArray.join(',')}&fields=*`).then(res => res.json()).then(data => data);

	return bookData;

}

async function getDownloadLink(md5) {

	try {
		const response = await got(`http://libgen.gs/ads.php?md5=${md5}`);
		const htmlres = response.body;
		var extractedLink = htmlres.match(/#A9F5BC"><a href=(.*)">/g)

		if (extractedLink == null) {
			return ""
		}
	} catch (error) {
		console.log(error.response.body);
	}

	return extractedLink[0].slice(18, -2);
}

async function getPreviewLink(md5) {

	try {
		const response = await got(`http://library.lol/main/${md5}`);
		const htmlres = response.body;
		var extractedLink = htmlres.match(/href="(.*)">Cloud/g)

		if (extractedLink == null) {
			return ""
		}
	} catch (error) {
		console.log(error.response.body);
	}

	return extractedLink[0].slice(6, -7);
}