
# Projeto Escola
Um projeto de gestão de escola, a principio uma aplicação REST, para poder em um futuro fazer todo o frontend da aplicação,
a ideia aqui é desenvolver algumas funções de get e post no banco.

A versão estavel está na v1.0.5


## Usuario
Com um frontend produzido no futuro, o usuario poderá cadastrar Aluno, Disciplina, Gabarito, e Resposta do Aluno.
E com esses dados incluidos podemos partir para as funções do aplicativo, onde ele corrigira a resposta incluida com o gabarito.

## Após isso temos as opções abaixo para o usuario conseguir utilizar

### Aprovado na Prova
Aqui retorna os alunos aprovados em uma determina prova, onde a entrada será o Id do Gabarito.

###Aprovado Disciplina
Aqui retorna os alunos aprovados em uma determina disciplina, onde a entrada será o Id da disciplina, ele fará uma média aritmetica somando todas as provas.

### Nota Final prova
Aqui retorna todos os alunos que realizaram uma determinada prova, e suas respectivas notas. 
Onde a entrada será o Id do Gabarito.

### Nota Final Disciplina
Aqui retorna todos os alunos que realizaram uma determinada disciplina, e suas respectivas notas. 
Onde a entrada será o Id do Gabarito.

### Listar Provas
Lista todas as provas do sistema, nesse caso ele trás o retorno de todos os gabaritos

### Listar Disciplinas
Lista todas as disciplinas
### Listar Alunos
Lista todos os Alunos

Para acessar a documentação e forma de entrada de dados acesse o link abaixo, pois a documentação foi produzida utilizando a aplicação Swagger
https://app.swaggerhub.com/apis/Jorge-Navarro/Projeto_Escola/1.0.5

## Backend
### API
Para o desenvolvimento da plataforma é utilizado uma API REST,  que expõe um conjunto de rotas para o cadastro e a obtenção de informações do banco de dados, tratando as requisições devidamente para validar os dados

Esse servidor é desenvolvido em JavaScript e Node.js, utilizando o framework Express, que fornece um conjunto robusto de ferramentas para o desenvolvimento de APIs e servidores.


A comunicação da API REST usada na plataforma se baseia em protocolos HTTP, desta forma, a comunicação é sempre inicializada pelo lado do cliente. Por conta disso, o servidor também expõe um servidor websocket, que se trata de uma comunicação TCP, onde dados podem ser transmitidos a qualquer momento pelo servidor ou pelo cliente.

Lembrando que é necessario um banco MongoDB para poder usar ela.
Afim de testes foi utilizando um banco Atlas. 
Esse dado de conexão deverá ser realizada no arquivo
no arquivo server.js na linha 6

mongoose.connect('Inserir o link de conexão nesse campo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,


})