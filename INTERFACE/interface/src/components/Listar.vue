<template>
  <div>
    <!-- n-> elemento
    index-> posição do vetor 
    :key = "aqui coloca algo que seja unico seu idiota"
    -->
    <p v-if="names.length==0">Não existe alunos cadastrados</p>
    <p v-else v-for="(n, index) in names" :key="index">
      {{ n }}
    </p>
    <button v-on:click="$emit('voltar')">Voltar</button>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>