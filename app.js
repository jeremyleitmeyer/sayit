const express     = require('express');
const bodyParser  = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app         = express();
const PORT        = process.env.PORT || 3000;
const auth        = require('./auth.json');

var db

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))



app.get('/', function(request, response){

  var cursor = db.collection('says').find().toArray(function (err, results) {
      response.render('pages/index.ejs', {
        says: results.reverse()
      })
  })
})

app.post('/say', function(request, response){
  console.log(request.body)
  db.collection('says').save(request.body, function(err, result){
    if (err) return console.log(err)
    console.log(request.body)
    response.redirect('/')
  })
})

MongoClient.connect(auth.MONGO_KEY, function(err, client){
  if (err) return console.log(err)
  db = client.db('sayit-dev') // whatever your database name is
  app.listen(PORT, function(){
    console.log('listening on ' + PORT)
  })
})
