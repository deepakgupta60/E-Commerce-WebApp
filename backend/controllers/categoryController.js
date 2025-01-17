const catModel = require('../models/categoryModel');
const fs = require('fs');
async function addCategory(req, res) {
    try
    {
        var picturename;
        if(!req.file)
        {
            picturename="defaultpic.jpg";
        }
        else
        {
            picturename=req.file.filename;
        }

        var newrecord = new catModel({catname:req.body.cname,picture:picturename})
        var result = await newrecord.save();
        if(result)
        {
            res.status(200).send({statuscode:1})
        }
        else
        {
            res.status(500).send({statuscode:0})
        }
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send({statuscode:-1,msg:"Some error occured"})
    }
}
async function fetchallCategory(req, res) 
{
    try
    {
        var result = await catModel.find();
        console.log(result);
        if(result)
        {
            res.status(200).send({statuscode:1,data:result})
        }
        else
        {
            res.status(200).send({statuscode:0})
        }
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send({statuscode:-1,msg:"Some error occured"})
    }
}

async function updateCategory(req, res) 
{
    try
    {
        var picturename;
        if(!req.file)
        {
            picturename=req.body.oldpicname;
        }
        else
        {
            picturename=req.file.filename;
            if(req.body.oldpicname!=="defaultpic.jpg")
            {
                fs.unlinkSync(`../public/uploads/${req.body.oldpicname}`);
            }
        }

        var updateresult = await catModel.updateOne({ _id: req.body.catid }, { $set: {catname:req.body.cname,picture:picturename}});

        if(updateresult.modifiedCount===1)
        {
            res.status(200).send({statuscode:1})
        }
        else
        {
            res.status(500).send({statuscode:0})
        }
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send({statuscode:-1,msg:"Some error occured"})
    }
}
module.exports = {addCategory,fetchallCategory,updateCategory};