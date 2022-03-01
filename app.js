const Express = require("express")
var csv = require('node-csv').createParser();
const axios  = require('axios')
const app = Express()

app.listen(3000, () => {
    console.log("im up on 3000");
})

app.get("/csv", (req, res) => {


    csv.mapFile('./spatial.csv', function (err, data) {

       axios.get('https://alpha-synin.herokuapp.com/places/districts').then((result)=>{
           var userObjs=[]
           data.forEach(element => {
               result.data.forEach(district=>{
                   if(element.district.toLowerCase() === district.district.toLowerCase() ){
                        let csvObj = {
                            properties:{
                                name:element.name,
                            district:element.district,
                            sale:element.sale,
                            },
                            geometry:district.geometry
                            
                        }

                        userObjs.push(csvObj)

                   }
               })
           });
           res.send(userObjs)
       }).catch((err)=>{
           console.log(err);
       })

    });
})