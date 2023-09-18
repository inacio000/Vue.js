<template>
    <form class="max-w-md my-6 mx-auto bg-white text-start p-6 rounded-lg">
        <label class="text-labelColor inline-block mx-0 mt-5 mb-4 text-sm uppercase font-bold">Email:</label>
        <input 
          type="email" 
          required
          v-model="email"
          class="w-full block px-2 py-3 box-border border-b-2 border-inputBorder text-inputColor"
        >
        <input 
        type="password"  
        required
        v-model="password"
        class="w-full block px-2 py-3 box-border border-b-2 border-inputBorder text-inputColor mb-6"
      >
      <label>Role: </label>
      <select v-model="role" class="w-full block px-2 py-3 box-border border-b-2 border-inputBorder text-inputColor">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>
      </form>

      <p>Email: {{ email }}</p>
      <p>Email: {{ password }}</p>
      <p>Role: {{ role }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: ''
    }
  }
}
</script>