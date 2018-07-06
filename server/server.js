const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


//endpoints

const port = 4000;
app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
})