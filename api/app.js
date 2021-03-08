const express = require("express");
const mongoose = require('mongoose');
const cors= require('cors');

require('./models/home');
const Home = mongoose.model('Home');

require('./models/orcamento');
const Solicitacao = mongoose.model('Solicitacao');

const app = express();
app.use(express.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers","X-PINGOTHER,Content-Type,Authorization");

    app.use(cors());
    next();
})

mongoose.connect('mongodb://localhost:27017/orcamento',
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("Conexão com Bd MongoDb realizado com sucesso!");
    }).catch((err) => {
        console.log("Erro: Conexão com BD não realizado.");
    });
// gerenciar rotas 

app.get('/home', async (req, res)=> {
    await Home.findOne({}).then((home)=>{
        return res.json({
            error:false,
            home
        });
    }).catch((err)=>{
        return res.status(400).json({
            error:true,
            message:"Nenhum registro encontrado!"
        });
    });

   // res.send("Api online");
});

app.post('/home', async (req, res) => {
    const dados = {
        "topTitulo": "Sua vitrine de compras virtual!!",
        "topTextoBtn": "Orçamento",
        "serTitulo": "Nossos Orçamentos",
        "serSubtitulo": "Morbi id viverra risus. Integer facilisis, felis et maximus cursus, nunc lorem euismod leo, vel aliquam libero nunc sed velit",
        "serUmIcone": "desktop",
        "serDoisIcone": "laptop-code",
        "serTresIcone": "network-wired",
        "serUmTitulo": "Serviço 1",
        "serDoisTitulo": "Serviço 2",
        "serTresTitulo": "Serviço 3",
        "serDescUm": "Mauris semper est nisi, vel porta mauris eleifend sit amet. Integer eu erat risus.Praesent lobortis erat ac aliquam bibendum.",
        "serDescDois": "Mauris semper est nisi, vel porta mauris eleifend sit amet. Integer eu erat risus.Praesent lobortis erat ac aliquam bibendum.",
        "serDescTres": "Mauris semper est nisi, vel porta mauris eleifend sit amet. Integer eu erat risus.Praesent lobortis erat ac aliquam bibendum.",


    }
    const homeExiste= await Home.findOne({});
    if(homeExiste){
        return res.status(400).json ({
            error:true,
            message:"Erro: A Pagina home ja possui um registro"

        });
       
    }

    await Home.create(dados, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Conteudo da pagina home não cadastrado"
        });


    });

    return res.json({
        error: false,
        message: " Conteudo da pagina home cadastrado com sucesso"
    });
});
// api da pagina Orçamento

app.post('/orcamento', async (req, res) => {
    
    await Solicitacao.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Solicitação de orçamento nao foi enviada com sucesso"
        });
   
    });
   

    return res.json({
        error: false,
        message: "Solicitação de orçamento enviada com sucesso"
    });
   
})


app.listen(5000, function () {
    console.log("Servidor iniciado na porta : http://localhost:5000")
})