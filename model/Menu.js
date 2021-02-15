import Sequelize from 'sequelize';
import db from '../config/db.js';
export const Menu= db.define('menu',{ 
  titulo:{
   type:Sequelize.STRING
  },
  slug:{
   type:Sequelize.STRING
  }
});
