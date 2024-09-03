const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');
const multer  = require('multer');

var jwt = require('jsonwebtoken');

function verifytoken(req,res,next)
  {
    if(!req.headers.authorization)
    {
      return res.status(401).send('Unauthorized Request')
    }
    let token = req.headers.authorization
    if(token=='null')
    {
      return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
    if(!payload)
    {
      return res.status(401).send('Unauthorized Request')
    }
    next()
  }


  let mystorage = multer.diskStorage({
    destination: (req, file, cb) => 
    {
      cb(null, "../public/uploads");//we will have to create folder ourselves
    },
    filename: (req, file, cb) => 
    {
        var picname = Date.now() + file.originalname;//1711956271167oil3.webp
      //milliseconds will be added with original filename and name will be stored in picname variable
        cb(null, picname);
    }
  });
  let upload = multer({ storage: mystorage });
  

router.post("/savecategory",verifytoken,upload.single('picture'),categoryController.addCategory);
router.get("/fetchallcat",categoryController.fetchallCategory);
router.put("/updatecategory",upload.single('picture'),categoryController.updateCategory);

module.exports = router;
