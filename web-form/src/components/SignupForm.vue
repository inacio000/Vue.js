<template>
  <form class="max-w-md my-6 mx-auto bg-white text-start p-6 rounded-lg">
    <label class="text-labelColor inline-block mt-2 text-sm uppercase font-bold">Email:</label>
    <input type="email" required v-model="email"
      class="w-full block px-2 py-3 box-border border-b-2 border-inputBorder text-inputColor mb-6">

    <label class="text-labelColor inline-block text-sm uppercase font-bold">Password:</label>
    <input type="password" required v-model="password"
      class="w-full block px-2 py-3 box-border border-b-2 border-inputBorder text-inputColor mb-6">

    <label class="text-labelColor inline-block mx-0 mt-5 mb-2 text-sm uppercase font-bold">Role: </label>
    
    <select v-model="role" class="w-full block px-2 py-3 box-border border-b-2 border-inputBorder mb-6">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label class="text-labelColor inline-block text-sm uppercase font-bold">Sills:</label>
    <input type="text" v-model="tempskill" @keyup="addskill"
      class="w-full block px-2 py-3 box-border border-b-2 border-inputBorder text-inputColor">
    <div v-for="skill in skills" :key="skill" class="inline-block mt-5 mr-2 py-2 px-4 bg-inputBorder border rounded-3xl bold cursor-pointer text-inputColor uppercase">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div>
      <input type="checkbox" required v-model="terms" class="inline-block w-8 mr-4 relative">
      <label class="text-labelColor inline-block mx-0 mt-5 mb-4 text-sm uppercase font-bold">Accept terms and
        conditions</label>
    </div>

    <div>
      <input type="checkbox" value="inacio" v-model="names" class="inline-block w-8 mr-4 relative">
      <label class="text-labelColor inline-block mx-0 mt-5 mb-4 text-sm uppercase font-bold">Inácio</label>
    </div>
    <div>
      <input type="checkbox" value="martinho" v-model="names" class="inline-block w-8 mr-4 relative">
      <label class="text-labelColor inline-block mx-0 mt-5 mb-4 text-sm uppercase font-bold">Martinho</label>
    </div>
    <div>
      <input type="checkbox" value="raimundo" v-model="names" class="inline-block w-8 mr-4 relative">
      <label class="text-labelColor inline-block mx-0 mt-5 mb-4 text-sm uppercase font-bold">Raimundo</label>
    </div>

  </form>

  <p>Email: {{ email }}</p>
  <p>Email: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
  <p>Names: {{ names }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      names: [],
      tempskill: '',
      skills: []
    }
  },
  methods: {
    addskill(e) {
      if(e.key === ' ' && this.tempskill) {
        if(!this.skills.includes(this.tempskill)) {
          this.skills.push(this.tempskill)
        }
        this.tempskill = ''
      }
      // console.log(e)
    },

    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item
      })
    }
  }
}
</script>