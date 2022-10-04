import { Sequelize } from 'sequelize';
import config from 'config';

// Get database instance from config dir
const k = config.get('database')

// Create sequelize instance
const sequelize = new Sequelize(k.dbname, k.username, k.password, {
  dialect: k.dialect,
  storage: k.storage,
  logging: k.logging,
});


export default sequelize;