const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const connect = require("./dbConnection/mongoDB")

const myRoute = require('./router/route')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(jsonParser)

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://anushkapradhan0122:EJMEJy5eYjwwIbPs@banking-api.vrcexot.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const PORT = 4500;
// app.use('',()= (req, res)=>(return res.status(200)))
app.use('/v1/account', myRoute)
const start =async()=>{
    try{
        const connectingString="mongodb+srv://anushkapradhan0122:EJMEJy5eYjwwIbPs@banking-api.vrcexot.mongodb.net/?retryWrites=true&w=majority&appName=banking-api";
        await connect(connectingString);
        // console.log("Pinged your deployment. Start");
        // await client.connect();
        // console.log("Pinged your deployment. Stage1");
        // // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        app.listen(PORT,()=>{
            console.log(`applications stars on ${PORT}`)
        })
    }
    catch(err){
        console.log(err)
    }
}

start();
