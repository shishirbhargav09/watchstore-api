require('dotenv').config();
var cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

const routes = require('./routes/routes');
// var bodyParser = require('body-parser')

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes)
app.get("/",(req,res) => { 
    res.send("Welcome To Shishir Bhargav's Ecommerce Rest Api")
 })


app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})
