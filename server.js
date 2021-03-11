const express = require('express');
const { MongoClient } = require("mongodb")
require('dotenv').config()

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }))

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('./dist/av-cookbook-app'));

  app.get('/recipes', function(req, res) {
    res.sendFile('index.html', { root: 'dist/av-cookbook-app/' });
  });

} else {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

app.get('/api/recipes/', async function (req, res) {
  const client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true });
  
  try {
    await client.connect();

    const database = client.db('cookbook');
    const collection = database.collection('recipes');

    const cursor = await collection.find({})

    const recipes = await cursor.next();

    return res.json(recipes);
  } catch(err) {
    console.log(err);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

app.listen(process.env.PORT || 8080, function() {
  if(process.env.NODE_ENV === 'development') {
    console.log('server is running: http://127.0.0.1:8080');
    console.log('To run the app: npm run dev');
    console.log('Listen for the app at: http://127.0.0.1:4200');
  }
});