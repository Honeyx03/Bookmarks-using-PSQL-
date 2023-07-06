//DEPENDENCIES
const express = require("express");
//we have to connect our controllers for bookmarks here in the app.js
const bookmarksController = require("./controllers/bookmarksController.js");


//CONFIGURATION
const app = express();

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

//the .use fxn is used to mount the specified middleware fxn at a specified path

//middleware fxns are fxns that have access to the request and response objects and the next fxn in the app's request-response cycle. The next fxn is the fxn in the Express, when invoked, executes the middleware succeding the current middleware;

//a middleware fxn can be defined using app.use() or router.use()
//middleware fxn is passed 3 parameters: req, res, next

//EXPORT
module.exports = app;
