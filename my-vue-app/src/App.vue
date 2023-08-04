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

  <!-- PROPS -->
  <h1>PROPS</h1>
  <BaseAlertProps 
    :variant="variant"
  >
    {{ text }}
  </BaseAlertProps>
  <hr>

  <!-- CONDICIONAL LOOP -->
  <h1>CONDITIONAL LOOP</h1>
  <ConditionalLoop />

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BaseCard from './components/BaseCard.vue';
import TheHeader from './components/TheHeader.vue';
import LifeCycle from './components/LifeCycle.vue';
import WatchConcept from './components/WatchConcept.vue';
import SlotComponent from './components/SlotComponent.vue';
import BaseAlertProps from './components/BaseAlertProps.vue';
import EventConceptsVue from './components/EventConcepts.vue';
import ConditionalLoop from './components/ConditionalLoop.vue';
import ComputedPropriety from './components/ComputedPropriety.vue';
import TwoWayDataBinding from './components/Two-way-data-binding.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    BaseCard,
    TheHeader,
    LifeCycle,
    WatchConcept,
    SlotComponent,
    BaseAlertProps,
    ConditionalLoop,
    EventConceptsVue,
    ComputedPropriety,
    TwoWayDataBinding,
  },
  data() {
    return {
      showHeader: true,
      firstName: 'Inacio',
      lastName: 'Raimundo',
      showName: true,
      accessLevel: 'marketing',
      variant: 'success',
      text: 'Form sent successfully'
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
