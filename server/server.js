//access through process .env
//take in create card add it to an array, then, when requested, push it to get card
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cc = require('./controllers')
const app = express();

app.use(bodyParser.json());


cardBaseUrl = "/api/cards"
app.post(cardBaseUrl, cc.create)
app.get(cardBaseUrl, cc.read)
app.put(`${cardBaseUrl}/:id`, cc.update)
app.delete(`${cardBaseUrl}/:id`, cc.delete)

// app.post('/api/origin', cc.createOrigin)


app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`listening on port: ${process.env.SERVER_PORT}`);
})