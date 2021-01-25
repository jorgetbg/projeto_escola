const Gabarito = require('../models/Gabarito');
const RespAluno = require('../models/RespAluno');

module.exports = {
    async todosGabaritos(req, res, tunai) {
        let gabaritostodos;
        try {
            gabaritostodos = await Gabarito.find().populate('idDisciplina');
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error
            });
        }
        let gabaritos = [];
        gabaritostodos.forEach(gabarito => {
            gabaritos.push({
                Disciplina: gabarito.idDisciplina.nome,
                codigoGabarito: gabarito._id,
                dataAplicacao: gabarito.data
            })
        });
        return res.json({
            sucesso: true,
            gabarito: gabaritos
        });
    },


    async store(req, res) {
        const { idDisciplina, data, questoes } = req.body;


        try {
            gabarito = await Gabarito.create({
                idDisciplina: idDisciplina,
                data: data,
                questoes: questoes
            });
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error
            });
        };

        return res.json({
            sucesso: true,
            idGabarito: gabarito._id
        });

    },


    async aprovadoProva(req, res) {
        const media = 7;
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
            if (aluno.nota >= media) {
                alunos.push({
                    nome: aluno.idAluno.nome,
                    nota: aluno.nota
                })
            }

        });
        return res.json({
            sucesso: true,
            alunos: alunos


        });





    }



}