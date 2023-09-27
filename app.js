//DEPENDENCIES
const express = require("express");
//we have to connect our controllers for bookmarks here in the app.js
const cors = require("cors");


//CONFIGURATION
const app = express();
const bookmarksController = require("./controllers/bookmarksController.js");

//MIDDLEWARE
app.use(express.json()); //parse incoming JSON from POST via cURL (RestMETHOD)
app.use(cors()); // This will allow ANY app to make requests to your API. Since we are just building a sample app and not hosting it online, we don't have to worry about restricting it. Later, when your app is deployed in the cloud, you would want to be more thoughtful about how to properly allow/restrict access.

//this is not necessary in this application but if we wanted to run a fxn for every request we want to use the code below
/*app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
});
*/

//the .use fxn is used to mount the specified middleware fxn at a specified path

//middleware fxns are fxns that have access to the request and response objects and the next fxn in the app's request-response cycle. The next fxn is the fxn in the Express, when invoked, executes the middleware succeding the current middleware;

//a middleware fxn can be defined using app.use() or router.use()
//middleware fxn is passed 3 parameters: req, res, next


//ROUTES
app.get("/", (request, response) => {
    response.send("welcome to Bookmarks App");
});

//we will use /bookmarks as the base of the routes like so:
app.use("/bookmarks", bookmarksController);

//404 page
app.get("*", (req, res) => {
    res.status(404).json ({error: "Page not found"});
});

//the asterisk is to denote any page that does not have a route

//without the res.status(404) when we open up our Chrome Dev Tools and go to the Network tab we will get a status of the 304 or 200 but we want 404 so we have to put status(404) which corresponds to "Page not found"

//EXPORT
module.exports = app;