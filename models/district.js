const mongoose = require("mongoose");

const districtSchema = new mongoose.Schema({
    type:{type:String},
    properties:{
        name:{type:String},
        region:{type:String},
    },
    geometry:{
        type:{type:String,default:"MultiPolygon"},
        coordinates:{type:Array}
    }
})

const district = mongoose.model("Districts", districtSchema);

module.exports = district;