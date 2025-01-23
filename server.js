const express = require ("express");
const app = express();
const port = 3000;


////////  experss Routes  ///////////////

const fruitsRouter = require('./routes/fruits'); // importing router into server.js which is out main js file where everything is configured
app.use('/fruits', fruitsRouter) // attaching and assocating the routers to specific url paths



//listern to server
app.listen (port, () => {
    console.log("server is listing");
});