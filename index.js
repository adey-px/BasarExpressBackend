import app from './app.js';
import sequelize from './source/db-config/Database.js';


// For db config
sequelize.sync();

app.listen(5000, () => {
  console.log('Development server is running...');
});