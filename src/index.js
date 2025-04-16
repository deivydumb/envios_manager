const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes.js');
const packageRoutes = require('./routes/packageRoutes.js');
const shipmentRoutes = require('./routes/shipmentRoutes.js');
const User = require('./models/userModel.js');
const Package = require('./models/packageModel.js');
const Shipment = require('./models/shipmentModel.js');

const { swaggerUi, swaggerSpec } = require('./config/swagger.js');


User.associate({ Shipment });
/* if (Package.associate) Package.associate({ User, Shipment }); */
 Shipment.associate({ User });


app.use(express.json());
app.use('/api', userRoutes);
app.use('/api',packageRoutes)
app.use('/api',packageRoutes)
app.use('/api',shipmentRoutes) 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));





module.exports = { User, Package,Shipment };

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});