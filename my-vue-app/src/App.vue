<template>
  <hr/>
  <h1>CONDITIONAL SHOW</h1>
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
  <hr/>
  
  <!-- CONDICIONAL if -->
  <h1>CONDITIONAL IF</h1>
  
  <div v-if="accessLevel === 'admin'">Admin User</div>
  <div v-else-if="accessLevel === 'mark'">Marketing User</div>
  <div v-else>Normal User</div>
  <hr/>
  
  <!-- EVENTS -->
  <h1>EVENTS</h1>
  <EventConceptsVue />
  <hr/>
  
  <h1>TWO WAY DATA BINDING</h1>
  <TwoWayDataBinding />  
  <hr/>

  <!-- COMPUTED PROPRIETY -->
  <h1>COMPUTED PROPRIETY</h1>
  <ComputedPropriety />
  <hr>

  <!-- Watch --> 
  <WatchConcept />
  <hr>

  <!-- LIFE CYCLE -->
  <h1>LIFE CYCLE</h1>
  <LifeCycle />
  <hr>

  <!-- SLOT COMPONENT -->
  <h1>SLOTS</h1>
  <SlotComponent>
    <template v-slot:title>
      Slot title
    </template>
    
    <template v-slot:description>
      Description Slot
    </template>

    Default Slot
  </SlotComponent>
  <hr>

  <!-- SCOPED & GLOBAL CSS -->
  <h1>SCOPED and GLOBAL CSS</h1>
  <div class="card">Testing CSS</div>
  <BaseCard />
  <hr>

  <!-- PROPS & EMIT -->
  <h1>PROPS AND EMIT</h1>
  <BaseAlertProps 
    v-if="showAlert"
    :variant="variant"
    @close="onClose()"
  >
    {{ text }}
  </BaseAlertProps>
  <hr>
  
  <!-- VUEX -->
  <h1>VUEX</h1>
  <h3>Using State Layer Concept</h3>
  <div>
    <li>{{ $store.state.user.firstName }}</li>
    <li>{{ $store.state.user.lastName }}</li>
    <li>{{ $store.state.user.email }}</li>
  </div>

  <AppProducts />

   <br>

   <pre>
    {{ $store.state.cart.length }}
   </pre>

   {{  $store.getters.total }}

   <br>

   {{ $store.state.user.firstName }}
   {{ $store.state.user.lastName }}
   
   <br> 
   <h3>COMPOSITION API Life Cycle</h3>
   <AppHook v-if="showAppHook"/>
   <button @click="showAppHook = !showAppHook">Toggle</button>

   <br>

   <AppButton
    data-vue="Inacio"
    @update="getUpdate"
   >
    Save
    <template #icon>Icon</template>
   </AppButton>

   <br>

  <button @click="updateUserData()">
    Update Profile
  </button>
  <hr>

  <CompositionAPI />

  <!-- CONDICIONAL LOOP -->
  <h1>CONDITIONAL LOOP</h1>
  <ConditionalLoop />

</template>

<script>
import { ref } from 'vue'
import AppHook from './components/AppHook.vue';
import BaseCard from './components/BaseCard.vue';
import TheHeader from './components/TheHeader.vue';
import AppButton from './components/AppButton.vue';
import LifeCycle from './components/LifeCycle.vue';
import WatchConcept from './components/WatchConcept.vue';
import SlotComponent from './components/SlotComponent.vue';
import BaseAlertProps from './components/BaseAlertProps.vue';
import EventConceptsVue from './components/EventConcepts.vue';
import ConditionalLoop from './components/ConditionalLoop.vue';
import AppProducts from './components/Products/AppProducts.vue';
import ComputedPropriety from './components/ComputedPropriety.vue';
import TwoWayDataBinding from './components/Two-way-data-binding.vue';
import CompositionAPI from './components/Products/CompositionAPI.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    AppHook,
    BaseCard,
    TheHeader,
    AppButton,
    LifeCycle,
    AppProducts,
    WatchConcept,
    SlotComponent,
    BaseAlertProps,
    CompositionAPI,
    ConditionalLoop,
    EventConceptsVue,
    ComputedPropriety,
    TwoWayDataBinding,
},

  setup() {
    const showAppHook = ref(true)

    const getUpdate = (data) => {
      console.log('getUpdate', data)
    }

    return {
      getUpdate,
      showAppHook
    }
  },

  methods: {
      onClose() {
        this.showAlert = false
        console.log("on close");
      },
      updateUserData() {
        const newUser = {
          firstName: 'Luis',
          lastName: 'Calela',
          email: 'calela@gmail.com',
        }
        // this.$store.commit('storeUser', newUser)
        this.$store.dispatch('storeUser', newUser).then(() => {
          console.log('Finished successfully')
        })
      }
      
  },

  data() {
    return {
      showHeader: true,
      firstName: 'Inacio',
      lastName: 'Raimundo',
      showName: true,
      accessLevel: 'marketing',
      variant: 'success',
      text: 'Form sent successfully',
      showAlert: true,
      // $store,
    }
  },
  // created() {
  //   const newUser = {
  //     firstName: 'Luis',
  //     lastName: 'Calela',
  //     email: 'calela@gmail.com',
  //   }
  //   console.log(this.$store.state.user)
  //   this.$store.commit('storeUser', newUser);
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6cacebb8;
  margin-top: 60px;
}
</style>
