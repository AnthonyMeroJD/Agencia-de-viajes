
import {Testimonio} from '../model/Testimonio.js'
import {areElementsEmpy} from '../utils/handlerErrors.js'


const guardarTestimonial=async(req,res)=>{
  const{nombre,correo,mensaje}=req.body; 
  const nameOfData=['nombre','correo','mensaje']
  //validar
  const errores=areElementsEmpy([nombre,correo,mensaje],nameOfData);
  if (errores.length>0) {
    //mostrar la vista con errores
    res.render('testimoniales',{
      errores,nombre,correo,mensaje
    });

  }else{        
      try {
        await Testimonio.create({
          nombre,
          correo,
          mensaje});
        const testimonios=await Testimonio.findAll();
          res.render('testimoniales',{
            success:true,
            success_msm:"se creo correctamente el testimonio",
            nombre,correo,mensaje,
            testimonios
          })          
      } catch (error) {
        errores.push('no se pudo ingresar el testimonio');
        res.render('testimoniales',{
         errores,  nombre,correo,mensaje
        })
      }
      
  }
}

export{guardarTestimonial} 