import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Users = db.define('users',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: /^\d{10,15}$/ // Validasi nomor telepon dengan 10 hingga 15 digit
        }
    },
    street_address: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //     notEmpty: true // Tidak boleh kosong
        // }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //     notEmpty: true // Tidak boleh kosong
        // }
    },
    region: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //     notEmpty: true // Tidak boleh kosong
        // }
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: /^\d{5}$/ // Validasi kode pos dengan 5 digit
        }
    }
},{
    freezeTableName: true
});

export default Users;