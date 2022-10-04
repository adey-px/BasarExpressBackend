import { Sequelize } from "sequelize";
import sequelize from "../db-config/Database.js";

// Model for user registration api endpoint
const Model = Sequelize.Model;
//
class UserModel extends Model { }

UserModel.init(
    {
        username: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        }
    }, 

    {
        sequelize,
        modelName: 'user'
    }
);


export default UserModel;