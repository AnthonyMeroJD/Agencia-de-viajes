import express from 'express';
import {home,
       nosotros, 
       viajes,
       testimonios,
       registrarse,login} from '../controller/controlers.js'
import { guardarTestimonial } from '../controller/testimonialControler.js';
import {registrarUsuario } from '../controller/userControler.js';
// debo importar  mis controladores
//estoy usando la misma instancia de 
//express
const router=express.Router();
router.get('/',home);

//:nombre del argumento que se pasa por el url
router.get('/viajes/:slug',viajes);

router.get('/login',login);

router.get('/testimonios',testimonios)

router.get('/nosotros',nosotros);

router.get('/registrarse',registrarse);
//debo exportar mi router para poder ocuparlo

router.post('/registrarse',registrarUsuario);
router.post('/testimonios',guardarTestimonial);
export default router;