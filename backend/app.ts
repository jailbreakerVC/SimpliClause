const  express  = require('express')
const dotenv = require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.4vjhf8h.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
    const result = await client.db("db").collection("invoice").findOne({});
    console.log("sending invoice data");
     return result;

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


const app = express();
app.get('/invoice', async (req, res) => {
     console.log("get request /invoice");
     const result = await run();
     res.send(result);
   });
app.listen(3000, () => console.log('Server ready'));



