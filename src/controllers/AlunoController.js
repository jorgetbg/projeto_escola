const Aluno = require('../models/Aluno');



module.exports = {
    async todosAlunos(req, res) {
        try {
            let alunos = await Aluno.find();
            return res.json(alunos);
        } catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error
            });
        }
    },
    async store(req, res) {
        const { nome } = req.body;
        let aluno;
        try { aluno = await Aluno.findOne().count(); }
        catch (error) {
            return res.status(500).json({
                sucesso: false,
                error: error
            });
        }
        
        if (aluno <= 100) {
            try {
                aluno = await Aluno.findOne({ nome });
            } catch (error) {
                return res.status(500).json({
                    sucesso: false,
                    error: error
                });
            }


            try {
                if (!aluno) {
                    aluno = await Aluno.create({ nome });
                }
            } catch (error) {
                return res.status(500).json({
                    sucesso: false,
                    error: error
                });
            }
            return res.json({
                sucesso:true,
                idAluno: aluno._id,
                aluno: aluno.nome
            });
        }
        else res.json({
            sucesso:false,
            error:'Você alcançou o limite de usuarios'});
    }
};

