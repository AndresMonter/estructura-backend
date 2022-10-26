import http from "http";
import api from "./api/api.js"
import config from "./api/config/index.js";
import database from "./api/config/database.js";


const server = http.createServer(api);

server.on("error", (error)=> {
    console.log("Error al iniciar el servidor");
})

server.on("listening", ()=> {
    console.log("Servidor escuchando");
})


server.listen(config.server.port);
database();

