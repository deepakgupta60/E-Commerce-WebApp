const registerModel = require('../models/accountModel');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const nodemailer = require('nodemailer');
require('dotenv').config()
var jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
    service : 'hotmail',
    auth : {
        user : `${process.env.SMTP_UNAME}`,
        pass : `${process.env.SMTP_PASS}`
    }
  })

async function createUser(req, res) {
    try
    {
        const hash = bcrypt.hashSync(req.body.pass, 10);
        var token = uuid.v4();
        var newrecord = new registerModel({name:req.body.pname,phone:req.body.phone,username:req.body.uname,password:hash, usertype:"normal",activated:false,actcode:token})

        var result = await newrecord.save();
        if(result)
        {
            const mailOptions = 
            {
            from: 'groceryplanet@hotmail.com',
            to: req.body.uname,
            subject: 'Activate your account :: SuperMarket.com',
            text: `Dear ${req.body.pname}\n\n Thanks for signing up on our website. Click on the following link to activate your account\n\n http://localhost:3000/activate?token=${token}`
            };
        
            // Use the transport object to send the email
            transporter.sendMail(mailOptions, (error, info) => 
            {
                if (error) 
                {
                    console.log(error);
                    res.status(200).send({statuscode:-2,msg:'Error sending email'})
                } 
                else 
                {
                    res.status(200).send({statuscode:1})
                    console.log('Email sent: ' + info.response);
                    res.send({msg:"Message sent successfully"});
                }
            });   
            
        }
        else
        {
            res.status(500).send({statuscode:0,msg:"Signup not successfull"})
        }
    }
    catch(e)
    {
        console.log(e.message);
        res.status(500).send({statuscode:-1,msg:"Error Occured try again"})
    }
}

async function loginUser(req, res) 
{
    try
    {
        var result = await registerModel.findOne({username:req.query.un})
        var result2 = await registerModel.findOne({username:req.query.un}).select("-password").select("-phone");
        if(result)
        {
            var passhash = result.password;
            if(bcrypt.compareSync(req.query.pass, passhash))
            {
                if(result.activated===true)
                {
                    if(result.usertype==="admin")
                    {
                        //token issue
                        let token = jwt.sign({data: result._id}, process.env.TOKEN_SECRET_KEY, { expiresIn: '1h' });
                        res.status(200).send({statuscode:1,userdata:result2,jtoken:token})
                    }
                    else
                    {
                        res.status(200).send({statuscode:1,userdata:result2})
                    }
                }
                else
                {
                    res.status(200).send({statuscode:2})
                }
            }
            else
            {
                res.status(200).send({statuscode:0,msg:"Username/Password Incorrect"})
            }
        }
        else
        {
            res.status(200).send({statuscode:0,msg:"Username/Password Incorrect"})
        }
    }
    catch(e)
    {
        console.log(e);
        res.status(500).send({statuscode:-1,msg:"Some error occured"})
    }
}

async function activateUser(req, res) 
{
    try
    {
    var updateresult = await registerModel.updateOne({actcode: req.params.token }, { $set: {activated:true}});

    if(updateresult.modifiedCount===1)
    {
        res.send({statuscode:1});
    }
    else
    {
        res.send({statuscode:0})
    }
}
catch(e)
{
    res.status(500).send({statuscode:-1})
}
}

module.exports = {createUser,loginUser,activateUser};