var fs = require('fs');
var http = require('http');
var https = require('https');
const cors = require('cors');
const libgen = require('libgen');

var privateKey  = fs.readFileSync('/etc/letsencrypt/live/mail.pozitron.in/fullchain.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/mail.pozitron.in/privkey.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.use(cors({
    origin:'https://book-ocean-9396f.web.app'
  }));
  
// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

app.get('/books/:bookname', async function (req, res) {
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

app.get('/searchbytitle/:md5',async(req,res)=>{
  const options_title = {
    mirror: 'http://libgen.is', 
    query: req.params.md5,
    search_in:"title",
    count:30
  }
  data = await libgen.search(options_title)
  res.send(data)
})

app.get('/searchbyisbn/:md5',async(req,res)=>{
  const options_title = {
    mirror: 'http://libgen.is', 
    query: req.params.md5,
    search_in:"identifier",
    count:30
  }
  data = await libgen.search(options_title)
  res.send(data)
})

app.get('/searchbyauthor/:md5',async(req,res)=>{
  const options_title = {
    mirror: 'http://libgen.is', 
    query: req.params.md5,
    search_in:"author",
    count:30
  }
  data = await libgen.search(options_title)
  res.send(data)
})

app.get('/searchbypublisher/:md5',async(req,res)=>{
  const options_title = {
    mirror: 'http://libgen.is', 
    query: req.params.md5,
    search_in:"publisher",
    count:30
  }
  data = await libgen.search(options_title)
  res.send(data)
})


app.get('/', (req, res) => {
  res.send("Hello World!");
})
app.get('*',(req,res)=>{
  res.redirect('https://localhost:5000')
})


httpServer.listen(5000);
httpsServer.listen(8443);