/* const { Sequelize } = require('sequelize');
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

export default sequelize;
 */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('envios_db', 'postgres', '', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: true,
  dialectOptions: {
    ssl: false,
  },
});

// Opcional: Crea datos iniciales (si necesitas)
const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    await sequelize.sync(); // Sincroniza los modelos con la base de datos
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};

initializeDB();

module.exports = sequelize;