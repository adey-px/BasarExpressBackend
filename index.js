import app from './app.js';
import sequelize from './source/db-config/Database.js';


// For db config
sequelize.sync();

app.listen(4000, () => {
  console.log('Development server is running...');
});