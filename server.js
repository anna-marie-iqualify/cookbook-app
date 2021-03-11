const express = require('express');
const { MongoClient } = require("mongodb")
require('dotenv').config()

const app = express();
console.log(process.env.NODE_ENV )
if(process.env.NODE_ENV === 'production') {
  console.log('production')
  app.use(express.static('./dist/av-cookbook-app'));

  app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/av-cookbook-app/' });
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