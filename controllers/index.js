const axios = require('axios')
const Papa = require('papaparse')

exports.getRoot = (req, res) => {
    res.send({
        name: "Nigga",
        age: 69
    })
}
exports.getLocationCsv = (req, res) => {
    const csvResults = Papa.parse(req.body.data,{header:true})
    console.log(csvResults.data);
    axios.get('http://localhost:3000/districts/all').then((results) => {
        var userObjs = []
        csvResults.data.forEach(element => {
            results.data.forEach(dis => {
                if (element[req.body.field].toLowerCase() === dis.properties.name.toLowerCase()) {
                    let csvObj = {
                        type:"Feature",
                        properties: element,
                        geometry: dis.geometry

                    }
                    userObjs.push(csvObj)
                }
            })
        });
        res.send(userObjs)
    })

}


