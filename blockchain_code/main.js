const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const resBlockchain = require("./app");

var block = new resBlockchain();
var resChainJson = block.resBlockchain();

// console.log("resChainJson----------------------", JSON.parse(resChainJson["chain"]));

var chain = JSON.parse(resChainJson["chain"]);
var valid = resChainJson["Blockchain_Valid"];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => { 
    return res.status(200).json({ "mesage": "Successfully data fetch", chain, valid })
});

app.listen(port, () => console.log(`listening on port ${port}!`));