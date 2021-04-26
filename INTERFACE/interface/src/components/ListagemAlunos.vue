<template>
  <div>
    <p v-for="aluno in alunos" :key="aluno._id">
      {{ aluno.nome }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alunos: [
        {
          _id: "6085d4f212c1670e40b05cc5",
          nome: "Cladinho",
          __v: 0,
        },
        {
          _id: "6085d4f712c1670e40b05cc6",
          nome: "Cleusa",
          __v: 0,
        },
        {
          _id: "6085d4fb12c1670e40b05cc7",
          nome: "Valdomira",
          __v: 0,
        },
        {
          _id: "6085d50112c1670e40b05cc8",
          nome: "Varso",
          __v: 0,
        },
        {
          _id: "6085d50512c1670e40b05cc9",
          nome: "Peralta",
          __v: 0,
        },
        {
          _id: "6085d50b12c1670e40b05cca",
          nome: "João",
          __v: 0,
        },
      ],
    };
  },
};
</script>

<style>
</style>