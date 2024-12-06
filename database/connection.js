const Sequelize = require('sequelize')

const sequelize = new Sequelize("validacao",  "root", "", { // Cria uma conexão com o banco de dados
    dialect: "mysql",
    host: "localhost",
    port: 3306
})

module.exports = sequelize 