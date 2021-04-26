<template>
  <div>
    <input v-model="disciplina" placeholder="Insira o nome da Disciplina" />
    <button v-on:click="armazenar">Proximo</button>
    <button v-on:click="$emit('encerrar')">Encerrar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disciplina: "",
    };
  },
  methods: {
    armazenar() {
      this.$emit("cadastro", this.disciplina);
      this.disciplina = "";
    },
  },
};
</script>

<style>
</style>