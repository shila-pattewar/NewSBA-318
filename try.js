const express = require ("express");
const app = express();
const port = 3000;

// /////// Middleware ////////

// app.use((req, res, next) => {
//     console.log(`This middleware is runnig for all routes. This one run first.`);
//     next()
// });

// app.use((req, res, next) => {
//     console.log(`This middleware is runnig for all routes. This one run second.`);
//     next()
// });

// // creating custom middleware to run for specific routes
// function customMiddleware(req, res, next){
//     console.log('This middleware is running for all /user/id only');
//     next()
// }


// // error handling midddleware. They always take forth arguments.
// app.use((err, req, res, next) => {
//     res.status(400).send(err.message);
//     next()
// })

////// Routes  ////////

// // sending text as response
// app.get('/', (req, res) => {
//     res.send(`The "base" or "home" screen for my experss server !`);
// });

// //sending HTML as a resonse
// app.get('/home', (req, res) => {
//     res.send('<h1>Hello World !!! </h1>');
// })

// //sending HTML formatted using back-tick
// app.get('/list', (req, res) => {
//     res.send(`<ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         </ul>`);
// })

// // redirecting the client to another route 
// app.get('/go-home', (req, res) => {
//     res.redirect('/home');
// })


// // utlizing the a URL route parameter
// app.get('user/:id', customMiddleware, (req, res) => {
//     console.log(req.params); // will send the contents of params object
//     res.send(`The id of user is ${req.params.id}`);
// })


// // Utilizing the URL Route param and query
// app.get('/name/:firstName',(req, res) => {
//     console.log(req.params);  // params
//     console.log(req.query);   // query
//     res.send(`My First Name is ${req.params.firstName} ${req.params.lastName}`);

// });


////////  experss Routes  ///////////////

const fruitsRouter = require('./routes/fruits'); // importing router into server.js which is out main js file where everything is configured
app.use('/fruits', fruitsRouter) // attaching and assocating the routers to specific url paths

// const vegetablesRouter = require('./routes/vegetables');
// app.use('/vegetables', vegetablesRouter)


// //CURD 

// app.get("/posts", (req, res) => {
//     res.json(posts);
//   });


//listern to server
app.listen (port, () => {
    console.log("server is listing");
});