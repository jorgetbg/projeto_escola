const Disciplina = require('../models/Disciplina');
const Gabarito = require('../models/Gabarito');
const RespAluno = require('../models/RespAluno');
const Aluno = require('../models/Aluno');


const media = 7;

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
            Nome:disciplina.nome,
            idDisciplina: disciplina._id
            
        });

    },





    async aprovadosUmDisciplina(req, res) {
        const { idDisciplina } = req.body;
        let alunosAprovados = await fazerlista(idDisciplina, 2);
        return res.json({
            sucesso: true,
            alunos: alunosAprovados
        });
    },



    async notafinalDisciplina(req, res) {
        const { idDisciplina } = req.body;
        let alunosAprovados = {};

        alunosAprovados = await fazerlista(idDisciplina, 2);

        return res.json({
            sucesso: true,
            alunos: alunosAprovados
        });
    },



};

async function fazerlista(idDisciplina, operador) {
    switch (operador) {
        case 1: {
            let gabaritos
            try {
                gabaritos = await Gabarito.find({ idDisciplina: idDisciplina });
            } catch (error) {
                return res.status(500).json({
                    sucesso: false,
                    error: error
                });
            }
            let respAlunos = [];

            //alunos que responderam aquele gabarito
            try {
                for (let i = 0; i < gabaritos.length; i++) {
                    respAlunoGabarito = await RespAluno.find({ idGabarito: gabaritos[i]._id }).populate('idAluno');

                    respAlunos = respAlunos.concat(respAlunoGabarito);
                }
            } catch (error) {
                return res.status(500).json({
                    sucesso: false,
                    error: error
                });
            }


            let alunos = {};

            //for que percorre o vetor respAlunos e armazena de forma individual as respostas de um unico aluno, e joga ele em um vetor de alunos
            respAlunos.forEach(respAluno => {
                if (alunos[respAluno.idAluno._id] == undefined) {
                    alunos[respAluno.idAluno._id] = {
                        nota: null,
                        resolucoes: [],
                        nome: respAluno.idAluno.nome
                    };
                }
                alunos[respAluno.idAluno._id].resolucoes.push(respAluno);

            })
            let alunosAprovados = [];
            //for para opter a nota final do aluno, somando a nota de todas as provas feitas pelo aluno.
            for (let idAluno in alunos) {
                let nota = 0;
                alunos[idAluno].resolucoes.forEach(resolucao => {
                    nota = nota + resolucao.nota;

                })
                alunos[idAluno].nota = parseFloat((nota / gabaritos.length).toFixed(2));
                if (alunos[idAluno].nota > media) {
                    alunosAprovados.push({
                        nome: alunos[idAluno].nome,
                        nota: alunos[idAluno].nota
                    });
                }
            }
            return alunosAprovados;


        }
        case 2: {
            let gabaritos
            try {
                gabaritos = await Gabarito.find({ idDisciplina: idDisciplina });
            } catch (error) {
                return res.status(500).json({
                    sucesso: false,
                    error: error
                });
            }

            let respAlunos = [];

            //alunos que responderam aquele gabarito
            try {
                for (let i = 0; i < gabaritos.length; i++) {
                    respAlunoGabarito = await RespAluno.find({ idGabarito: gabaritos[i]._id }).populate('idAluno');

                    respAlunos = respAlunos.concat(respAlunoGabarito);
                }
            } catch (error) {
                return res.status(500).json({
                    sucesso: false,
                    error: error
                });
            }
            let alunos = {};

            //for que percorre o vetor respAlunos e armazena de forma individual as respostas de um unico aluno, e joga ele em um vetor de alunos
            respAlunos.forEach(respAluno => {
                if (alunos[respAluno.idAluno._id] == undefined) {
                    alunos[respAluno.idAluno._id] = {
                        nota: null,
                        resolucoes: [],
                        nome: respAluno.idAluno.nome
                    };
                }
                alunos[respAluno.idAluno._id].resolucoes.push(respAluno);
            })

            let alunosAprovados = [];
            //for para opter a nota final do aluno, somando a nota de todas as provas feitas pelo aluno.
            for (let idAluno in alunos) {
                let nota = 0;
                alunos[idAluno].resolucoes.forEach(resolucao => {
                    nota = nota + resolucao.nota;
                })
                alunos[idAluno].nota = (nota / gabaritos.length).toFixed(2);
                alunosAprovados.push({
                    nome: alunos[idAluno].nome,
                    nota: alunos[idAluno].nota
                });
            }


            return alunosAprovados;


        }
    }
}


