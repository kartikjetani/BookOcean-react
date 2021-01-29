const got = require("got");
const express = require("express");
// const search = require("libgen/lib/search");
const fetch = require('node-fetch');
const cors = require('cors');
const app = express()
const port = 5000


app.use(cors({
	origin:['http://localhost:3000','http://localhost:5000','http://bookocean.epizy.com/','http://bookocean.ml']
  }));

app.get('/', (req, res) => {
	res.send("my api World!");
});

// Search logic function
async function search(options) {

	const fieldsArray = ["title", "md5", "publisher", "author", "identifier", "filesize", "coverurl"]


	try {
		const response = await got(`http://libgen.li/search.php?req=${options.query}&open=0&res=50&view=simple&phrase=1&column=${options.search_in}`);
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

	// console.log(bookData);
	return bookData;

}

app.get('/searchbymd5/:md5', async (req, res) => {
	const option = {
		query: encodeURIComponent(req.params.md5),
		search_in: "md5"
	}
	data = await search(option);
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

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})