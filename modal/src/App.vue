<template>
  <div class="flex flex-col text-center gap-5">
    <h1 class="w-96 m-auto text-3xl font-bold text-slate-700 border-b-2">{{ title }}</h1>
    <!-- <input type="text" ref="name" class="w-96 mx-auto">
    <button @click="handleClick" class="bg-purple-400 w-96 mx-auto">Click</button> -->
    <MyModal header="Sign up for the Giveaway"/>
  </div>
</template>

<script>
import MyModal from "@/components/MyModal.vue"

export default {
  name: 'App',
  components: { MyModal },
  data() {
    return {title: 'Vue App'}
  },
  // methods: {
  //   handleClick() {
  //     console.log(this.$refs.name)
  //     this.$refs.name.classList.add('active')
  //     this.$refs.name.focus()
  //   }
  // }
}
</script>

<style>
  *  {
    margin: 0;
    padding: 0;
  }
</style>