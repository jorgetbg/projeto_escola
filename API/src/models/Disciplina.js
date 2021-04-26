const mongoose = require('mongoose');


const DisciplinaSchema = new mongoose.Schema({
    nome: {

        type: String,
        trim: true,
        required: true
    }

});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);