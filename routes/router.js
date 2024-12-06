const express = require('express') 
const router = express.Router() // Puxa o metodo para a criação de rotas

router.get('/', (req,res)=>{ // Inicializa na pagina desejada quando entrar no servidor
    res.render('../public/views/index.ejs') 
})

module.exports = router