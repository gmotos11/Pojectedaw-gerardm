require("dotenv").config();
const Server = require("./models/server");

const server = new Server();
server.listen();


//Boy -> raw -> -> json "usermname": "pepito"

/**
 * USUARIS 
 *      GET/POST/DELETE -> ECHO
 * 
 * CLIENTS
 *      GET/POST/DELETE -> ECHO
 */