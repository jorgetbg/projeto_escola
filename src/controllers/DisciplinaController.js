const Disciplina = require('../models/Disciplina');
const Gabarito = require('../models/Gabarito');
const RespAluno = require('../models/RespAluno');
const Aluno = require('../models/Aluno');


const media = 2;

module.exports = {

    async todasDisciplinas(req, res) {
        let disciplinas;
        try {
            disciplinas = await Disciplina.find();
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error
            });
        }
        return res.json({
            sucessor: true,
            disciplinas: disciplinas
        });
    },

    async store(req, res) {
        const { nome } = req.body;
        let disciplina;
        try {
            disciplina = await Disciplina.findOne({ nome });
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error
            });
        }
        try {
            if (!disciplina) {
                disciplina = await Disciplina.create({ nome });
            }
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error
            });
        }
        return res.json({
            sucesso: true,
            idDisciplina: disciplina._id
        });

    },





};
