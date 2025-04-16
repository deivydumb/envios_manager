const { Sequelize } = require('sequelize');
const env = require('./env');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // Base de datos en RAM
  logging: false // Desactiva logs para mejor performance
});

// Opcional: Crea datos iniciales (si necesitas)
const initializeDB = async () => {
  await sequelize.sync();
  // Aquí puedes crear datos de prueba
};

initializeDB();

module.exports = sequelize;