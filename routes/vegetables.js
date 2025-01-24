const express = require("express");
const vegRouter = express.Router();

const vegetables = require("../data/vegetables");


// Get Data
vegRouter.get('/', (req, res) => {
    res.json(vegetables)
    console.log("You are on vegetable page")
})

// POST Data (to add a new vegetables)
vegRouter.use(express.json());


vegRouter.post('/', (req, res) => {
    
    console.log(req.body);

    // Check if the required fields are present in the request body
    if (req.body.name && req.body.color && req.body.price) {
        // Create a new vegetables object
        const newVegetables = {
            id: vegetables.length ? vegetables[vegetables.length - 1].id + 1 : 1, 
            name: req.body.name,
            color: req.body.color,
            price: req.body.price
        };

        // Add the new fruit to the fruits array
        vegetables.push(newVegetables);

        // Send a response with the new fruit object
        res.status(201).json(newVegetables);  // 201 status code for created resource
    } else {
        // If any required data is missing, return an error message
        res.status(400).json({ error: "Missing required fields" });
    }
});


// PATCH

vegRouter.patch("/:id", (req, res, next) => {

    console.log(req.body);
    
    const patchVegetables = vegetables.find((patchVegetables, i) => {

        console.log(`This is the fruit id: ${patchVegetables.id}`);
        console.log(`This is the req.params.id: ${req.params.id}`);

      if (patchVegetables.id == req.params.id) {
        for (const key in req.body) {

          console.log(`Updating field ${key} to ${req.body[key]}`);

          vegetables[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (patchVegetables)
            res.json(patchVegetables);
    else 
        {
            next();
        }
    });

    //DELETE


    vegRouter.delete("/:id", (req, res, next) => {
    // The DELETE request route simply removes a resource.
    console.log(req.body)
    const deleteVegetables = vegetables.find((deleteVegetables, i) => {
      if (deleteVegetables.id == req.params.id)
         {
            vegetables.splice(i, 1);
            return true;
         }
    });

    if (deleteVegetables) res.json(deleteVegetables);
    else next();
  });


module.exports = vegRouter;