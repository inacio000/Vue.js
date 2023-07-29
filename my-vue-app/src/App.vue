<template>
  <TheHeader
    v-if="showHeader"
  />

  <!-- CONDICIONAL show -->
  <div
    v-show="showName"
  >
    firstName: {{ firstName }}
    <br/>
    LastName: {{ lastName }}
  </div>

  <!-- CONDICIONAL if -->

  <div v-if="accessLevel === 'admin'">Admin User</div>
  <div v-else-if="accessLevel === 'mark'">Marketing User</div>
  <div v-else>Normal User</div>
  <img 
    
    alt="Vue logo" 
    src="./assets/logo.png"
  >

  <!-- CONDICIONAL LOOP -->
  <ConditionalLoop />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import ConditionalLoop from './components/ConditionalLoop.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TheHeader,
    ConditionalLoop
  },
  data() {
    return {
      showHeader: true,
      firstName: 'Inacio',
      lastName: 'Raimundo',
      showName: true,
      accessLevel: 'marketing',
    }
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
