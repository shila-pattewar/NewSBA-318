const express = require("express");
const router = express.Router();

const vegetablesData = require("../data/vegetables");

router.get('/', (req, res) => {
   // res.send('This is vegetables page');
    res.json(vegetablesData)
    console.log("You are on vegetable page")
})



module.exports = router;