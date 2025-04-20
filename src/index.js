const express = require('express');
const app = express();
const cors = require('cors');
const env = require('../src/config/env.js');
require('dotenv').config();
// Configura CORS primero
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const JWT_SECRET = env.JWT_SECRET;
const JWT_EXPIRES_IN = env.JWT_EXPIRES_IN;

// Luego el body parser
app.use(express.json());

// Rutas
const userRoutes = require('./routes/userRoutes.js');
const packageRoutes = require('./routes/packageRoutes.js');
const shipmentRoutes = require('./routes/shipmentRoutes.js');
const conveyorRoutes = require('./routes/conveyorRoutes.js');
const journeyRoutes = require('./routes/journeyRoutes.js');
const vehicleRoutes = require('./routes/vehicleRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const authMiddleware = require('./middlewares/auth.js');

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use(authMiddleware);
app.use('/api', packageRoutes);
app.use('/api', shipmentRoutes); 
app.use('/api', conveyorRoutes);
app.use('/api', journeyRoutes);
app.use('/api', vehicleRoutes);


// Swagger
const { swaggerUi, swaggerSpec } = require('./config/swagger.js');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;