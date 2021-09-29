const express = require('express');
const database = require("@replit/database")
const path = require('path');

const db = new database()
const app = express();
app.use(express.urlencoded({ extended: true })); 

app.listen(3000, () => {
  // console.log('server started');
});

app.post('/link', (req, res) => {

  let key = '' + req.body.key;
  let value = '' + req.body.value;

  db.set(key, value).then(() => {
    db.get(key).then(link => {
      res.send(path.join(__dirname + '/' + key))
    });
  });

});

<form action="/link" method="POST">
  <label for="key">Short URL</label><br>
  <input type="text" id="key" name="key" value="google"> <br>
  <label for="value">Long URL</label> <br>
  <input type="url" id="value" name="value" value="https://google.com"> <br> <br>
  <input type="submit" value="Submit">
</form> 

app.get('/new', (req, res) => {
  res.sendFile(path.join(__dirname + '/new.html'));
});