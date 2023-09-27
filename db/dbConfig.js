/* the code below sets up a PSQL database connection using pg-promise library for our node.js app
*/

//importing dependencies
const pgp = require("pg-promise")();
require("dotenv").config();

/* the code above imports the pg-promise library using "require" and "dotenv", which is a library for loading environmental variables from teh .env file into the process.env.
*/ 


//Setting up the PostgresSQL Connection Configuration:
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT, 
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
};

/* the code above sets up a configuration object "cn" for connecting to PSQL database. it uses .env variables (likely defined in an .env file) for PSQL host, port, database name, and user.
*/

//Creating the database connection object:
const db = pgp(cn);

/* the code above creates a database connection object 'db' using the pg-promise library and configuration object 'cn'. this obkect will be used to interact with the PSQL database. 
*/ 

module.exports = db;