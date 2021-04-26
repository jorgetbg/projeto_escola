const express = require('express');


const DisciplinaController = require('./controllers/DisciplinaController');
const GabaritoController = require('./controllers/GabaritoController');
const AlunoController = require('./controllers/AlunoController');
const RespAlunoController = require('./controllers/RespAlunoController');
const { get } = require('mongoose');



const routes = express.Router();

routes.post('/disciplina', DisciplinaController.store);//cadastra disciplina
routes.post('/gabarito', GabaritoController.store); //cadastra gabarito
routes.post('/aluno', AlunoController.store);//cadastra aluno
routes.post('/respAluno', RespAlunoController.store);// inclui resposta do aluno para o determinado gabarito

routes.get('/aprovadosDisciplina', DisciplinaController.aprovadosUmDisciplina);//alunos aprovados na disciplina
routes.get('/notafinalDisciplina', DisciplinaController.notafinalDisciplina);//nota final da disciplina (listagem  com todos os alunos)
routes.get('/notaFinalProva', RespAlunoController.notafinalProva);//nota final do aluno em um determinado gabarito/prova
routes.get('/todasDisciplinas', DisciplinaController.todasDisciplinas);//lista todas as disciplinas
routes.get('/todosAlunos', AlunoController.todosAlunos); //lista alunos
routes.get('/todosGabaritos', GabaritoController.todosGabaritos);//lista gabaritos
routes.get('/aprovadosprova', GabaritoController.aprovadoProva);//alunos aprovados em uma unica prova


module.exports = routes;