const mongoose = require('mongoose');
var catSchema = new mongoose.Schema({
    catname:String,
    picture:String},
    {versionKey:false})

module.exports = mongoose.model("category",catSchema,"category");
