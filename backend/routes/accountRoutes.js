const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');

router.post("/signup", accountController.createUser);
router.get("/login", accountController.loginUser);
router.get("/activateaccount/:token", accountController.activateUser);

module.exports = router;
