import {Sequelize} from "sequelize";

const db = new Sequelize('tfm_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;