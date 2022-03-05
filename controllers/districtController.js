const district = require('../models/district')
exports.getAll = (req, res) => {
    district.find({},(err,data)=>{
        if(err){
            console.log(err);
            res.send("an error occured")
        }else{
            res.send(data)
        }
    })
}

exports.getOne = (req, res) => {
    district.findOne({"properties.name":req.params.id},(err,data)=>{
        if(err){
            console.log(err);
            res.send("an error occured")
        }else{
            if(!data){
                res.send("no district found, check spelling")
            }else{
                res.send(data)
            }
            
        }
    })
}

exports.addDistrict = (req, res) => {
    var counter = 0
    console.log(req.body);
    const dis = {
        type: 'Feature',
        properties: {
            name: req.body.properties.DISTRICT,
            region: req.body.properties.REGION,
        },
        geometry: {
            coordinates: req.body.geometry.coordinates
        }
    }
    district.create(dis).then((data) => {
        res.send("district added successfully")
    })



}

