const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 4000
const cors = require('cors');
const passwords = '5a5aO5cTxEEOtmho';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://process.env.DB_USER:process.env.DB_PASS@cluster0.ffemf.mongodb.net/volunterNetwork?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("volunterNetwork").collection("volunteer");

  app.post('/addVolunteer', (req, res) => {
      const newVolunteer = req.body;
      console.log(newVolunteer);
  })

});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)