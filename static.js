const express = require("express");
const path = require('path');
const port = 3000
const app = express()


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})