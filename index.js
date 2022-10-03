import app from './app.js';
import sequelize from './source/db-config/database.js';


// 
sequelize.sync();

app.listen(5000, () => {
  console.log('Development server is running...');
});