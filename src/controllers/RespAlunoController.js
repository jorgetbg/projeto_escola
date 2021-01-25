
const RespAluno = require('../models/RespAluno');
const Aluno = require('../models/Aluno');
const Gabarito = require('../models/Gabarito');
const mongoose = require('mongoose');

const media=2;
module.exports = {

    async store(req, res) {
        const { idAluno } = req.body;
        const { idGabarito } = req.body;
        const { data } = req.body;
        const { questoes } = req.body;

        let gabarito;
        try {
            gabarito = await Gabarito.findOne({ _id: idGabarito });
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error
            });
        }
        let somaPeso = 0;

        let nota = 0;

        for (let i = 0; i < gabarito.questoes.length; i++) {
            for (let j = 0; j < gabarito.questoes.length; j++) {
                if (gabarito.questoes[i].numero == questoes[j].numero) {
                    if (gabarito.questoes[i].altCorreta == questoes[j].altRespondida) {
                        nota = nota + (1 * gabarito.questoes[i].peso);
                    }
                }

            }
            somaPeso = somaPeso + gabarito.questoes[i].peso;
        }

        let media = (nota / somaPeso) * 10;

        try {
            respAluno = await RespAluno.create({
                idAluno: idAluno,
                idGabarito: idGabarito,
                data: data,
                questoes: questoes,
                nota: media.toFixed(2)

            })
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error

            });
        }
        let aluno;
        try {
            aluno = await Aluno.findOne({ _id: idAluno });
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error

            });
        }
        console.log(aluno);
        //return res.json(respAluno);
        return res.json({
            sucesso: true,
            idResposta: respAluno._id,
            nome: aluno.nome,
            nota: respAluno.nota

        });
    },


    async notafinalProva(req, res) {
        const { idGabarito } = req.body;
        let respAlunos;
        try {
            respAlunos = await RespAluno.find({ idGabarito: idGabarito }).populate('idAluno');
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error
            });
        }
        let alunos = [];
        respAlunos.forEach(aluno => {
            alunos.push({
                nome: aluno.idAluno.nome,
                nota: aluno.nota
            })
        });
        return res.json({
            sucesso: true,
            alunos: alunos
        });
    },

}