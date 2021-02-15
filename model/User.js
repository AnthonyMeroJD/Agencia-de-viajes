import Sequelize from "sequelize";
import db from "../config/db.js";
export const User=db.define('User',{
 name:{
  type:Sequelize.STRING(12)
 },
 password:{
  type:Sequelize.STRING(12)
 },
 correo:{
  type:Sequelize.STRING,
  unique:true
 }
});