module.exports = (app)=>{
    //importar a config do database
    var conexao = require('../config/database')
    //importar a model gallery
    var gallery = require('../models/gallery')


    //abrir o formulário
    app.get('/gallery',async(req,res)=>{

        //conectar com o banco de dados

        conexao()

        //buscar os documentos gravados na coleção gallery

        var documentos = await gallery.find()

        //enviar os documentos para a página ejs

        res.render('gallery.ejs',{resultado:documentos})

    })



    //importar das configurações do upload

    var upload = require('../config/upload')

    //fazer o upload da imagem na pasta de destino

    app.post('/gallery',upload.single('imagem'),async(req,res)=>{

        //conectar com o database

        conexao()

        //gravar o nome do arquivo na collection gallery

        var arquivo = await new gallery(

            {

                arquivo : req.file.filename

            }

        ).save()

        //apos o upload voltar para o formulario

        res.redirect('/gallery')

    })

}