
<template>
  <div>
    <Inicio
      v-if="opcao == 'inicio'"
      v-on:cadastrar="opcao = 'cadastrar'"
      v-on:listar="opcao = 'listar'"
    />
    <Cadastrar v-else-if="opcao == 'cadastrar'" v-on:cadastro="armazenar" v-on:encerrar="opcao='inicio'" />
    <Listar v-else-if="opcao=='listar'" :names="names" v-on:voltar="opcao='inicio'"/>
   
  </div>
</template>

<script>
import Inicio from "./Inicio";
import Cadastrar from "./Cadastrar";
import Listar from "./Listar"

export default {
  data() {
    return {
      names: [],
      opcao: "inicio",
    };
  },
  methods: {
    armazenar(name) {
      this.names.push(name);

      console.log(`chamar rota cadastrar aluno, cadastrando: ${name}`);
    },
  },

  components: {
    Inicio,
    Cadastrar,
    Listar
  },
};
</script>

<style>
</style>