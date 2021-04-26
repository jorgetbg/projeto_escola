<template>
  <div>
    <input v-model="name" placeholder="Insira o nome do Aluno" />
    <button v-on:click="armazenar">Proximo</button>
    <button v-on:click="$emit('encerrar')">Encerrar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    armazenar() {
      this.$emit("cadastro", this.name);
      this.name = "";
    },
  },
};
</script>

<style>
</style>