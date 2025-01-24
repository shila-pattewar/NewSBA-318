const express = require("express");
const vegRouter = express.Router();

const vegetables = require("../data/vegetables");


// Get Data
vegRouter.get('/', (req, res) => {
    res.json(vegetables)
    console.log("You are on vegetable page")
})

// POST Data (to add a new fruit)
//vegRouter.use(express.json());


// vegRouter.post('/', (req, res) => {
    
//     console.log(req.body);

//     // Check if the required fields are present in the request body
//     if (req.body.name && req.body.color && req.body.price) {
//         // Create a new fruit object
//         const newFruit = {
//             id: vegetables.length ? vegetables[vegetables.length - 1].id + 1 : 1, 
//             name: req.body.name,
//             color: req.body.color,
//             price: req.body.price
//         };

//         // Add the new fruit to the fruits array
//         fruits.push(newFruit);

//         // Send a response with the new fruit object
//         res.status(201).json(newFruit);  // 201 status code for created resource
//     } else {
//         // If any required data is missing, return an error message
//         res.status(400).json({ error: "Missing required fields" });
//     }
// });



module.exports = vegRouter;