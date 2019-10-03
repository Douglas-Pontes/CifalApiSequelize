const conn = require("../config/database")
const Sequelize = require("sequelize")

const Produto = conn.define(
    'Produtos',
    {
        CodProduto: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Desceq: Sequelize.STRING,
        Unideq: Sequelize.STRING,
        Estoque: Sequelize.STRING,
        PerVista: Sequelize.STRING
    },
    {
        timestamps: false
    }
)

module.exports = Produto