<template>
  <div class="flex flex-col text-center gap-5">
    <h1 class="w-96 m-auto text-3xl font-bold text-slate-700 border-b-2">{{ title }}</h1>
    <!-- <input type="text" ref="name" class="w-96 mx-auto">
    <button @click="handleClick" class="bg-purple-400 w-96 mx-auto">Click</button> -->
    <div v-if="showModal">
      <MyModal
        theme=""
        @close="toggleModal"
      >
        <h1 class="text-3xl text-titlecolor font-bold">Welcome To Our Site</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo quae maiores possimus.</p>
        <template v-slot:links>
          <div class="flex justify-around">
            <a class="" href="/"><button class="border rounded-lg p-2 hover:bg-gray-100 duration-500">Sign Up Now</button></a>
            <a class="" href="/"><button class="border rounded-lg p-2 hover:bg-gray-100 duration-500">More Info.</button></a>
          </div>
        </template>
      </MyModal>
    </div>
    
    
    <div v-if="showSecondModal">
      <MySecondModal @close2="toggleSecondModal">
        <h2 class="text-3xl text-titlecolor font-bold">Welcome To Second Modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ex asperiores numquam quas aspernatur.</p>
        <template v-slot:links>
          <div class="flex justify-around">
            <a class="" href="/"><button class="border rounded-lg p-2 hover:bg-gray-100 duration-500">Sign Up Now</button></a>
            <a class="" href="/"><button class="border rounded-lg p-2 hover:bg-gray-100 duration-500">More Info.</button></a>
          </div>
        </template>
      </MySecondModal>
    </div>
    
    <button 
      @click="toggleModal"
      class="w-28 p-2 rounded-lg mx-auto bg-blue-500"
    >Show Modal</button>
    
    <button 
    @click="toggleSecondModal"
    class="p-2 rounded-lg mx-auto bg-blue-500"
  >Show Second Modal</button>
  </div>
</template>

<script>
import MyModal from "@/components/MyModal.vue"
import MySecondModal from './components/MySecondModal.vue'

export default {
  name: 'App',
  components: { MyModal, MySecondModal },
  data() {
    return {
      title: 'Vue App',
      header: 'Sign up for the Giveaway',
      text: 'Grad your ninja swag for half price!',
      showModal: false,
      showSecondModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleSecondModal() {
      this.showSecondModal = !this.showSecondModal
    }
  }
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