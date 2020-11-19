<template>
  <div id="app">
      <h1>Problema de Montyhall</h1>
      <Gift />
  </div>
  
  
</template>

<script>
import Gift from './components/Gift.vue'
export default {
  name: 'App',
  components: {Gift}
}
</script>

<style>
  *{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body{
    color: #ffffff;
    background: linear-gradient(to right, #22c1c3, #fdbb2d);
  }
  #app{
    display: flex;
    flex-direction:column;
    align-items: center;
  }
  #app{
    /* border: 1px solid #000; */
    border-radius: 3px;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
  }


</style>