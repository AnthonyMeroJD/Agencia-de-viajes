import Sequelize from 'sequelize';
import db from '../config/db.js';
//es importante que el nombre del modelo es singular
//implicitamente el modelo pluraliza el nombre de la tabla que corresponde
//o puedo colocar el nombre directamente
//@3param {tablename:"defineNameOfTable"}
//este es el modelo defino la entidad y las columnas que se definen
export const Viaje= db.define('viaje', {
 titulo: {
  type: Sequelize.STRING
 },
 precio: {
  type: Sequelize.STRING
 },
 fecha_ida: {
  type: Sequelize.DATE
 },
 fecha_vuelta: {
  type: Sequelize.DATE
 },
 imagen: {
  type: Sequelize.STRING
 },
 descripcion :{
  type:Sequelize.STRING}
,
disponibles :{
 type:Sequelize.STRING},
slug:{
  type:Sequelize.STRING}
});