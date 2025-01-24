const express = require("express");
const proRouter = express.Router();

const protein = require("../data/protein");


// GET Data
proRouter.get('/', (req, res) => {
    res.json(protein)
    console.log("You are on protein page")
})

// POST Data (to add a new protein)
proRouter.use(express.json());


proRouter.post('/', (req, res) => {
    
    console.log(req.body);

    // Check if the required fields are present in the request body
    if (req.body.name && req.body.color && req.body.price) {
        // Create a new protein object
        const newProtein = {
            id: protein.length ? protein[protein.length - 1].id + 1 : 1, 
            name: req.body.name,
            color: req.body.color,
            price: req.body.price
        };

        // Add the new protein to the protein array
        protein.push(newProtein);

        // Send a response with the new protein object
        res.status(201).json(newProtein);  // 201 status code for created resource
    } else {
        // If any required data is missing, return an error message
        res.status(400).json({ error: "Missing required fields" });
    }
});

// PATCH

proRouter.patch("/:id", (req, res, next) => {

    console.log(req.body);
    
    const patchProtein = protein.find((patchProtein, i) => {

        console.log(`This is the protein id: ${patchProtein.id}`);
        console.log(`This is the req.params.id: ${req.params.id}`);

      if (patchProtein.id == req.params.id) {
        for (const key in req.body) {

          console.log(`Updating field ${key} to ${req.body[key]}`);

          protein[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (patchProtein)
            res.json(patchProtein);
    else 
        {
            next();
        }
    });

    // DELETE
    
    proRouter.delete("/:id", (req, res, next) => {
    // The DELETE request route simply removes a resource.
    console.log(req.body)
    const deleteProtein = protein.find((deleteProtein, i) => {
      if (deleteProtein.id == req.params.id)
         {
            protein.splice(i, 1);
            return true;
         }
    });

    if (deleteProtein) res.json(deleteProtein);
    else next();
  });



module.exports = proRouter;