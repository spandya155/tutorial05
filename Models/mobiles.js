var mongoose = require('mongoose');

var mobileSchema = mongoose.Schema({
    name:String,
    price:Number
})

module.exports = mongoose.model("mobiles",mobileSchema)