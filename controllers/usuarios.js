const { response } = require("express");
const { request } = require("express");


const usuariosGet=(request, response) =>{
const query=request.query;

response.json({
        'ok':true,
        'msg':"GET del json del controlador",
        query
    });
};
const usuariosPut= (req=request, res=response) =>{
    const {id}=req.params;
        res.json({
            'ok':true,
            'msg':"PUT del json del controlador",
            id
        
        });
    };
const usuariosPost=(req, res) =>{
//obtenemos la informacion del body en formato json
    const {nombre,edad} = req.body;


            res.json({
                'ok':true,
                'msg':"POST del json del controlador",
                nombre,
                edad
            });
        };
const usuariosDelete=(req, res) =>{
                res.json({
                    'ok':true,
                    'msg':"DELETE del json del controlador"
                });
            };
module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}            