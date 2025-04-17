require('dotenv').config(); // Asegurar carga de variables .env

const environments = ['development', 'test', 'production'];
const currentEnv = process.env.NODE_ENV || 'development';

if (!environments.includes(currentEnv)) {
  throw new Error(`NODE_ENV debe ser uno de: ${environments.join(', ')}`);
}

module.exports = {
  NODE_ENV: currentEnv,
  DB_DIALECT: process.env.DB_DIALECT || 'sqlite',
  DB_STORAGE: ':memory:', // ←
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 5432,
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || `myapp_${currentEnv}`,
  DB_SSL: process.env.DB_SSL || 'false',
  DB_LOGGING: process.env.DB_LOGGING || 'false'
};