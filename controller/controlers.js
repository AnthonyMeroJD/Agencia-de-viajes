//aqui se debe usar los modelos 
import {Viaje}from '../model/Viajes.js'
import {Testimonio} from '../model/Testimonio.js'

//un controlador no es mas que el callback que controla  la ruta
//debe ser async xq se va a encargar de consultar al modelo
//el modelo es basicamente un objeto con metodos que me permiten 
//consultar la tabla de la que esten mapeando

const home=async(req,res)=>{  
 
 const consultas=[] ;
 consultas.push(Viaje.findAll());
 consultas.push(Testimonio.findAll({limit:3}));
 try {
  const [viajes,testimonios]=await Promise.all(consultas);
  const namePage="Nuestros proximos viajes"
  res.render('welcome',{
   namePage,
   viajes,
   testimonios,
   clase:'home'
  });  
 } catch (error) {
   res.render('error')
 } 
 
}


const nosotros=(req,res)=>{
 const namePage="About us"
res.render('nosotros',{
 namePage
});
}


const viajes=async(req,res)=>{
  const{slug}=req.params;
  try{
   const viaje=await Viaje.findOne({where:{slug}})
   console.log(viaje);
   res.render('viaje',{
     viaje
   })
  }catch(error){
   console.log("algo salio mal");
  }
  
}

const testimonios=async(req, res)=>{
  const namePage='testimoniales';
  try {
    const testimonios=await Testimonio.findAll();
    res.render('testimoniales',{
      namePage,
      testimonios
    });  
  } catch (error) {
    res.render('error');
  }
  
}

const registrarse=(req,res)=>{
  res.render('registro');
}

const login =(req, res)=>{
  res.render('login')
}
export {nosotros,home,viajes,testimonios,registrarse,login}