const express = require('express');
const cors = require('cors');
const routerUser = require('../routes/usuarios');
require('dotenv').config();
class Server{
    
    constructor(){
         this.app = express();
         this.port=process.env.PORT;
         this.userRoutePath=process.env.USER_ROUTE_PATH;
         this.middlewares();
        this.routes();
    }

    middlewares(){
            //CORS
            //con esta forma habilita todas las peticiiones desde cualquier ip 
            this.app.use(cors());

            //lectura y parseo del body   va intentar serializar en formato json en caso de post enviamos json
            this.app.use(express.json());

            //Directorio publico
            this.app.use(express.static('public'));
    }

    routes(){
        //localhost:8082/api/usuarios hace mapeo a router
      this.app.use(this.userRoutePath,routerUser);
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto:' + this.port);
        });
    }

}
module.exports=Server;