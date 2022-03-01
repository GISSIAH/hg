const Express = require("express")
var csv = require('node-csv').createParser();
const axios  = require('axios')
const app = Express()

app.listen(3000, () => {
    console.log("im up on 3000");
})

app.get("/csv", (req, res) => {


    csv.mapFile('./spatial.csv', function (err, data) {

       data.forEach(element => {
           axios.get()
       });

    });
})