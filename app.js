const express     = require('express');
const bodyParser  = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app         = express();
const PORT        = process.env.PORT || 3000;
const auth        = require('./auth.json');

var db

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('css'))

app.get('/', function(request, response){
  var cursor = db.collection('quotes').find().toArray(function (err, results) {
    response.render('pages/index.ejs', {
      quotes: results
    })
  })
})

app.post('/quotes', function(request, response){
  db.collection('quotes').save(request.body, function(err, result){
    if (err) return console.log(err)

    console.log('saved to database')
    response.redirect('/')
  })
})

MongoClient.connect(auth.MONGO_TOKEN, function(err, client){
  if (err) return console.log(err)
  db = client.db('nycda-node') // whatever your database name is
  app.listen(PORT, function(){
    console.log('listening on ' + PORT)
  })
})
