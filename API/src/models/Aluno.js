const mongoose = require('mongoose');


const AlunoSchema = new mongoose.Schema({
    nome: {

        type: String,
        
        required: true
    }

});

module.exports = mongoose.model('Aluno', AlunoSchema);