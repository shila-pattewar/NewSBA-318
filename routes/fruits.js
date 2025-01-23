const express = require("express");
const router = express.Router();

const fruitsData = require("../data/fruits");
const fruits = require("../data/fruits");


// GET Data
router.get('/', (req, res) => {
   // res.send('This is fruits page');
    res.json(fruitsData)
    console.log("You are on fruit page")
})


// POST Data (to add a new fruit)
router.use(express.json());



router.post('/', (req, res) => {
    
    console.log(req.body);

    // Check if the required fields are present in the request body
    if (req.body.name && req.body.color && req.body.price) {
        // Create a new fruit object
        const newFruit = {
            id: fruitsData.length ? fruitsData[fruitsData.length - 1].id + 1 : 1, 
            name: req.body.name,
            color: req.body.color,
            price: req.body.price
        };

        // Add the new fruit to the fruitsData array
        fruitsData.push(newFruit);

        // Send a response with the new fruit object
        res.status(201).json(newFruit);  // 201 status code for created resource
    } else {
        // If any required data is missing, return an error message
        res.status(400).json({ error: "Missing required fields" });
    }
});





module.exports = router;
  