//DEPENDENCIES
const app = require("./app.js");
/* the above line of code imports the "app.js" module into the server.js file.
In Node.js we use "require" to include other modules or files in our program. In the code above it is importing an file called "app.js"
*/ 

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
//using "dotenv" simplifies the management of sensitive/ configuration-related information in our application.


//LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
//this part of the code is responsible for starting a server using the "app" module and having it listen on a specified port (PORT) When the server starts, a message will print to the console to indicate the server is working. 

/* in summary, server.js sets up a Node.js server that listens on a specified port (retrieved from environment variables (env file)) and imports functionality from an app.js module. The server is configured to use env variables loaded from a .env file. when the server starts it logs a message to the console indicating that it is listening.

"app" is a variable 
*/