import { User } from '../model/User.js';
import { areElementsEmpy } from '../utils/handlerErrors.js';


const login= async(req,res)=>{

}
const registrarUsuario = async (req, res) => {
 const { nombre, correo, password } = req.body;
 const handlerFields = ["nombre", "correo", "contraseña"];
 const errores = areElementsEmpy([nombre,correo,password], handlerFields)
 const areSomeError = errores.length > 0;
 if (areSomeError) {
  res.render('registro', {errores,nombre,correo,password});
 } else {
  try {
   await User.create({ name:nombre, correo, password });
   res.render('registro',{success:true,success_msm:"el usuario se registro correctamente"})
  } catch (error) {
       
   res.render('error',{error:"Este correo esta siendo utilizado"});
  }
 }

}
export{registrarUsuario}