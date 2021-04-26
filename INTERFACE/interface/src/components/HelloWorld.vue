<template>
  <div>
    <p>
     {{
       titulo+resultado
     }}
    </p>
    <button v-on:click="incremente">Incremento</button>    
    <button v-on:click="decremente">Decremento</button>

    <p v-if="resultado<2">
      Texto
    </p>
    <p v-else-if="resultado==2">
      Ta fora
    </p>
    <p v-else>
      è isso ai
    </p>
  </div>
</template>

<script>
export default {
  name: "Sominha",
  data(){
    return {
      resultado:0,
      titulo:"Se fodemos um total de: "
    }
  },
  methods:{
    incremente(){
      this.resultado++
    },
    decremente: function(){
      this.resultado--;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
