const {Router} = require('express');
//definimos las funciones de flecha es decir controladores aqui en esta ruta
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete} = require('../controllers/usuarios');

// manejo de las rutas usando el router
const router = new Router();
//localhost:8082/api/usuarios?pais=mx&edo=cdmx
router.get('/',usuariosGet);
//:id estamos recibiendo el páramero del req localhost:8082/api/usuarios/10
router.put('/:id',usuariosPut);
router.post('/',usuariosPost);
router.delete('/',usuariosDelete);
module.exports=router;