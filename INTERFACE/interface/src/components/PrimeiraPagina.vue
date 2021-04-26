
<template>
  <div>
    <Menu
      v-if="opcaop == 'inicio'"
      v-on:aluno="
        {
          opcaop = 'aluno';
          opcao = 'aluno';
        }
      "
      v-on:disciplina="
        {
          opcaop = 'disciplina';
          opcao = 'disciplina';
        }
      "
    />

    <div v-else-if="opcaop == 'aluno'">
      <InicioAluno
        v-if="opcao == 'aluno'"
        v-on:cadastrar="opcao = 'alunoCadastrar'"
        v-on:listar="opcao = 'alunoListar'"
        v-on:menu="opcaop = 'inicio'"
      />
      <CadastrarAluno
        v-else-if="opcao == 'alunoCadastrar'"
        v-on:cadastro="armazenarAluno"
        v-on:encerrar="opcao = 'aluno'"
      />
      <ListarAluno
        v-else-if="opcao == 'alunoListar'"
        v-on:voltar="opcao = 'aluno'"
      />
    </div>
    <div v-else-if="opcaop == 'disciplina'">
      <InicioDisciplina
        v-if="opcao == 'disciplina'"
        v-on:cadastrar="opcao = 'disciplinaCadastrar'"
        v-on:listar="opcao = 'disciplina_listar'"
        v-on:menu="opcaop = 'inicio'"
      />
      <CadastrarDisciplina
        v-else-if="opcao == 'disciplinaCadastrar'"
        v-on:cadastro="armazenarDisciplina"
        v-on:encerrar="opcao = 'disciplina'"
      />
      <ListarDisciplina
        v-else-if="opcao == 'disciplinaListar'"
        v-on:voltar="opcao = 'disciplina'"
      />
    </div>
  </div>
</template>

<script>
import InicioAluno from "./Aluno/Inicio";
import CadastrarAluno from "./Aluno/Cadastrar";
import ListarAluno from "./Aluno/Listar";
import Alunos from "../services/Aluno";

import InicioDisciplina from "./Disciplina/Inicio";
import CadastrarDisciplina from "./Disciplina/Cadastrar";
import ListarDisciplina from "./Disciplina/Listar";
import Disciplinas from "../services/Disciplina";

import Menu from "./MenuInicial";

export default {
  data() {
    return {
      aluno: {
        nome: String,
      },
      opcao: "inicio",
      opcaop: "inicio",
      disciplina: {
        nome: String,
      },
    };
  },
  methods: {
    armazenarAluno(name) {
      this.aluno.nome = name;

      Alunos.set(this.aluno).then(alert("Salvo com sucesso"));
    },
    armazenarDisciplina(name) {
      this.disciplina.nome = name;
      Disciplinas.set(this.aluno).then(alert("Salvo com sucesso"));
    },
  },

  components: {
    Menu,

    InicioAluno,
    CadastrarAluno,
    ListarAluno,

    InicioDisciplina,
    CadastrarDisciplina,
    ListarDisciplina,
  },
};
</script>

<style>
</style>