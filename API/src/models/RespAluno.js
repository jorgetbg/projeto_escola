const mongoose = require('mongoose');


const RespAlunoSchema = new mongoose.Schema({
    idAluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        require: [true, 'Precisa do codigo do Aluno']
    },
    idGabarito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gabarito',
        require: [true, 'Precisa do codigo do Gabarito']
    },
    data: String,
    questoes: [{
        numero: {
            type: Number,
            required: [true, 'Não pode deixar este campo vazio']
        },

        altRespondida: {
            type: String,
            trim: true,
            maxlength: [1, 'Este campo aceita apenas 1 character'],

            lowercase: true,
            required: [true, 'Não pode deixar este campo vazio']
        }

    }],
    nota: Number

});

module.exports = mongoose.model('RespAluno', RespAlunoSchema);