const mongoose = require('mongoose')

const conexao = async() => {

var atlas = await mongoose.connect('mongodb+srv://userAdmin:LG4180TV@fiaptecnico.xwquw.mongodb.net/test')
}

module.exports = conexao