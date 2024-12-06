var express = require('express'); // Biblioteca utilizada para criar um servidor node
var app = express(); // inicizalização do servidor

const rotas = require('./routes/router')//criação para a rota do controle de navegação do usuario

const bodyParser = require('body-parser')// Cria o objeto bordyParser para ler dados de formulario

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/', rotas) 
app.use(express.static(__dirname +'/public'))
app.set('view engine', 'ejs')

const bd_visitantes = require('./database/tables/bd_visitantes.js') // Cria a conexao com a tabela de visitantes ligando ao arquivo onde ela esta

app.post('/cadastrarVisitante', (req,res) =>{ // Função de cadastrar visitante

    var visitante = { // Cria o objeto do visitante recuperando os dados do formulario
        name : req.body.name,
        cpf : req.body.cpf,
        email : req.body.email,
        phone : req.body.phone
    }

    console.log("Cadastrando usuario")
    console.log(visitante)

    bd_visitantes.create({ // Cria uma instancia no banco de dados
      name : visitante.name,
      cpf : visitante.cpf,
      email : visitante.email,
      phone : visitante.phone
    })
    .then(()=>{ // Se tudo estiver certo 
      console.log("Usuario cadastrado")
      res.send(201)
    })
    .catch((err)=>{ // se der algum erro
      console.log("Erro ao cadastrar usuario:" + err)
      res.send(500)
    })
})


const port = process.env.PORT ||3000;// porta do servidor node

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () { 
  console.log(`SERVER OPEN ON PORT ${port}`)
});