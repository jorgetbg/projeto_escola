<template>
  <div>
     <p>Selecione as opções abaixo referente a Disciplinas</p>
    <button v-on:click="$emit('cadastrar')">Cadastrar</button>
    <button v-on:click="$emit('listar')">Listar</button>
    <button v-on:click="$emit('menu')">Menu Principal</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opcao: "inicio",
    };
  },
};
</script>

<style>
</style>