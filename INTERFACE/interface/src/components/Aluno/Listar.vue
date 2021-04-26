<template>
  <div>
    <!-- n-> elemento
    index-> posição do vetor 
    :key = "aqui coloca algo que seja unico seu idiota"
    -->
    <p v-if="this.names.length == 0">Não existe alunos cadastrados</p>
    <p v-else v-for="(n) in this.names" :key="n._id">
      {{ n.nome }}
    </p>
    <button v-on:click="$emit('voltar')">Voltar</button>
  </div>
</template>

<script>

import Alunos from "../../services/Aluno";
export default {
  data() {
    return {
      names:[],
    };
  },

  mounted() {
    Alunos.get().then((alunos) => {
      this.names = alunos.data;
    });
  },

/*-- props: {
    names: {
      type: Array,
      required: true,
    },
  },*/
};
</script>

<style>
</style>