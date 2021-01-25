const mongoose = require('mongoose');


const GabaritoSchema = new mongoose.Schema({
    idDisciplina: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disciplina'
    },
    data: String,
    questoes: [{
        numero: {
            type: Number,
            required: [true, 'É necessario saber qual questão pertence a resposta']
        },

        altCorreta: {
            type: String,
            trim: true,
            maxlength: [1, 'Este campo aceita apenas 1 character'],
            lowercase: true,
            required: [true, 'Não pode deixar este campo vazio']
        },
        peso: {
            type: Number,
            min: [0, 'Peso de cada questão deve ser maior que zero'],
            required: [true, 'Não pode deixar este campo vazio e devera ser maior que zero.']
        }
    }]
});

module.exports = mongoose.model('Gabarito', GabaritoSchema);




