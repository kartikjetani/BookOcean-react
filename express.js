const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors');
const port = 5000
const libgen = require('libgen');

app.use(cors({
  origin:['http://localhost:3000','http://localhost:5000','http://bookocean.epizy.com/']
}));


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/auto/:bookname', async function (req, res) {
    const options = {
        mirror: 'http://libgen.is', 
        query: req.params.bookname,
        count: 30,
        sort_by : "title"
      }
    
      try {
         data = await libgen.search(options)
      } catch (err) {
         console.error(err)
      }
    res.send(data)
  })

  app.get('/title/:title',async(req,res)=>{
    const options_title = {
      mirror: 'http://libgen.is', 
      query: req.params.title,
      search_in:"title",
      count:30
    }
    data = await libgen.search(options_title)
    res.send(data)
  })


app.get('/searchbymd5/:md5',async(req,res)=>{
  const options_md5 = {
    mirror: 'http://libgen.is', 
    query: req.params.md5,
    search_in:"md5",
    count:1
  }
  data = await libgen.search(options_md5)
  res.send(data)
})

app.get('/searchbyisbn/:isbn',async(req,res)=>{
  const options_isbn = {
    mirror: 'http://libgen.is', 
    query: req.params.isbn,
    search_in:"identifier",
    count:10
  }
  data = await libgen.search(options_isbn)
  res.send(data)
})


app.get('/author/:author',async(req,res)=>{
  const options_author = {
    mirror: 'http://libgen.is', 
    query: req.params.author,
    search_in:"author",
    count:30
  }
  data = await libgen.search(options_author)
  res.send(data)
})

app.get('/publisher/:publisher',async(req,res)=>{
  const options_publisher = {
    mirror: 'http://libgen.is', 
    query: req.params.publisher,
    search_in:"publisher",
    count:30
  }
  data = await libgen.search(options_publisher)
  res.send(data)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})