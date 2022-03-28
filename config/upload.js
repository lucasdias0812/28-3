//importar o pacote multer
const multer = require('multer')

//configurar o padrao de armazenamento
const armazenamento = multer.diskStorage(
    //pasta de destino
    {
        destination:(req,file,cb)=>{
            cb(null,'./assets/images/')
        },
        //definir o padrão para os nomes dos arquivos
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)

var upload = multer({storage:armazenamento})

module.exports = upload