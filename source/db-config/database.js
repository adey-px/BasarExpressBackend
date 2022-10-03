import { Sequelize } from "sequelize";

// Create sequelize instance
const sequelize = new Sequelize('hoaxify', 'app-user-db', 'db-p4ss', {
        dialect: 'sqlite',
        storage: './db.sqlite',
        logging: false,
});


export default sequelize;