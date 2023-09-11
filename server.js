//DEPENDENCIES
const app = require("./app.js");

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
//using "dotenv" simplifies the management of sensitive/ configuration-related information in our application.


//LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});