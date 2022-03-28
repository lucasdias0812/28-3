module.exports = (app) =>{

    //Importar as operações do database
    var conexao = require('../config/database')

    //Importar o modelo mygrid
    var modelo = require('../models/mygrid')

    //Abrir formulário mygrid.js
    app.get('/mygrid',(req, res)=>{
        //Conectar com database
        conexao()
        
        //Buscar todos os documentos da coleçao mygrid
        modelo.find()
        .then((modelo)=>{
            res.render('mygrid.ejs', {dados:modelo})
        })
        .catch(()=>{
            res.render('mygrid.ejs')
        })

        
    })

    //Gravar as imformações commo formulário
    app.post('/mygrid', (req, res)=>{
        //Conectar com o datebase
        conexao()

        //Gravar o documento na coleção mygrid
        var documento = new modelo({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{
            res.redirect('/mygrid')
        })
        .catch(()=>{
            res.send("Não foi possivel gravar os dados no database")
        })
    })
}