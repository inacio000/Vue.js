<template>
  <h1 class="text-3xl font-bold">In Reaction Timer</h1>
  <button type="button" @click="start" 
    :disable="isPlaying"
    class="w-20 bg-white p-2 mt-4 rounded disabled:bg-transparent"
  >Play</button>
  <BlockButton v-if="isPlaying" :delay="delay"/>
</template>

<script>
import BlockButton from '@/components/BlockButton.vue'

export default {
  name: 'App',
  components: { BlockButton },
  data() {
    return {
      isPlaying: false,
      delay: null,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
    }
  },
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
