const Sequelize = require('sequelize') // Sequelize para a utilização do mysql junto do node
const database = require('../connection') // Importa as configurações do banco de dados

const bd_visitantes = database.define('bd_visitantes', { // Criação da tabela visitantes sem a necessidade de codigos mysql
    name : {
        type : Sequelize.STRING
    },

    cpf: {
        type: Sequelize.STRING
    },

    email: {
        type : Sequelize.STRING
    },

    phone : {
        type : Sequelize.STRING
    }
})

// bd_visitantes.sync({force:true}) 

module.exports = bd_visitantes