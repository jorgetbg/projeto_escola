<template>
<div id="app">

   <!-- <HelloWorld /> -->
    <!--<ListagemAlunos/> -->
    <PrimeiraPagina/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import ListagemAlunos from './components/ListagemAlunos'

import PrimeiraPagina from './components/PrimeiraPagina'

export default {
  name: 'App',
  components: {
    //HelloWorld,
   // ListagemAlunos,
    PrimeiraPagina
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
