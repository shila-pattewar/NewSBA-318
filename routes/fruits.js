const express = require("express");
const router = express.Router();

const fruits = require("../data/fruits");


// GET Data
router.get('/', (req, res) => {
   // res.send('This is fruits page');
    res.json(fruits)
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
            id: fruits.length ? fruits[fruits.length - 1].id + 1 : 1, 
            name: req.body.name,
            color: req.body.color,
            price: req.body.price
        };

        // Add the new fruit to the fruits array
        fruits.push(newFruit);

        // Send a response with the new fruit object
        res.status(201).json(newFruit);  // 201 status code for created resource
    } else {
        // If any required data is missing, return an error message
        res.status(400).json({ error: "Missing required fields" });
    }
});

// PATCH

router.patch("/:id", (req, res, next) => {

    console.log(req.body);
    
    const patchFruit = fruits.find((patchFruit, i) => {

        console.log(`This is the fruit id: ${patchFruit.id}`);
        console.log(`This is the req.params.id: ${req.params.id}`);

      if (patchFruit.id == req.params.id) {
        for (const key in req.body) {

          console.log(`Updating field ${key} to ${req.body[key]}`);

          fruits[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (patchFruit)
            res.json(patchFruit);
    else 
        {
            next();
        }
    });
  router.delete("/:id", (req, res, next) => {
    // The DELETE request route simply removes a resource.
    console.log(req.body)
    const deleteFruit = fruits.find((deleteFruit, i) => {
      if (deleteFruit.id == req.params.id)
         {
            fruits.splice(i, 1);
            return true;
         }
    });

    if (deleteFruit) res.json(deleteFruit);
    else next();
  });


module.exports = router;
  