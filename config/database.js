const Sequelize = require('sequelize')
const dotenv = require("dotenv")

dotenv.config();

const conn = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PWD,
    {
        dialect: "mssql",
        host: process.env.HOST,
        port: 1433,
        logging: false,
        dialectOptions: {
            requestTimeout: 30000
        }
    }
)

module.exports = conn