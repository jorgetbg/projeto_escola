<template>
  <div>
      <p> Escolha o tipo de dados que você deseja alterar</p>
    <button v-on:click="$emit('aluno')">Aluno</button>
    <button v-on:click="$emit('disciplina')">Disciplina</button>
   <!-- <button v-on:click="$emit('menu')">Menu Principal</button> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
       opcao: "inicio",
    }
  }

};
</script>

<style>
</style>