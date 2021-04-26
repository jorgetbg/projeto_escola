<template>
  <div>
    <!-- n-> elemento
    index-> posição do vetor 
    :key = "aqui coloca algo que seja unico seu idiota"
    -->
    <p v-if="this.disciplinas.length == 0">Não existe alunos cadastrados</p>
    <p v-else v-for="(d) in this.disciplinas" :key="d._id">
      {{ d.nome }}
    </p>
    <button v-on:click="$emit('voltar')">Voltar</button>
  </div>
</template>

<script>

import Disciplinas from "../../services/Disciplina";
export default {
  data() {
    return {
      disciplinas:[],
    };
  },

  mounted() {
    Disciplinas.get().then((disciplinas) => {
      this.disciplinas = disciplinas.data;
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