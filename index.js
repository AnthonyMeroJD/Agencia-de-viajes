/*Commond js
const express =require('express');
const app = express();
//definir el puerto en el que se va a 
//correr el servidor
//process es una variable de entorno
const port=process.env.PORT||4000;

//inicio el servidor
app.listen(port,()=>{console.log(`este es el puerto${port}`)});*/
//solo se puede tener una instancia de expreess
import express from 'express';
import router from './routs/index.js';
import db from './config/db.js';
import {Menu} from './model/Menu.js';
import {User} from './model/User.js';

const app=express();
//Agrego el body parser me ayudara a ontener datos por post
   app.use(express.urlencoded({extended:true}));
   //User.sync({ force: true })   
//usar db retorna una promise
db.authenticate().
   then(()=>console.log('base de datos conectada')).
   catch((error)=>console.log('algo ocurrio'));

//habilita el template engine
app.set('view engine','pug');

//asi puedo pasar variables a varias vistas
//estos son los midle wears 
app.use(async(req,res,next)=>{
 const date =new Date();
 //locals es donde almaceno las variables para todas las 
 //vistas
 res.locals.menus=await Menu.findAll();
 res.locals.currentDate=date.getFullYear();
 //return next fuerza a seguir con el siguiente mdelware
 return next();
});

//asi puedo definir las rutas desde un archivo
//use soporta todos los verbos de la web

app.use('/',router);



//aqui defino los archivos estaticos que 
//se va a utlizar en este caso mi carperta 
//public
app.use(express.static('public'));

const port=process.env.Port|| 4100;

//solo se puede enviar una respuesta 
//esta ees la manera de definir una ruta


app.listen(port);