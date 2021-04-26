<template>
  <div>
    <button v-on:click="$emit('cadastrar')">Cadastrar</button>
    <button v-on:click="$emit('listar')">Listar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opcao:"inicio",
    };
  },

};
</script>

<style>
</style>