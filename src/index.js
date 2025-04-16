const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes.js');
const packageRoutes = require('./routes/packageRoutes.js');
const User = require('./models/userModel.js');
const Package = require('./models/packageModel.js');
User.associate({ Package });
Package.associate({ User });
const { swaggerUi, swaggerSpec } = require('./config/swagger.js');




app.use(express.json());
app.use('/api', userRoutes);
app.use('/api',packageRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));





module.exports = { User, Package };

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});