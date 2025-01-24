const express = require("express");
const proRouter = express.Router();

const protien = require("../data/protien");


// GET Data
proRouter.get('/', (req, res) => {
    res.json(protien)
    console.log("You are on protien page")
})

module.exports = proRouter;