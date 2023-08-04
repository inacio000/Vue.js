<template>
    <div>
        <TheHeader v-if="showHeader"/>
        <input type="text" v-model="name">
        {{ name }} 
        <br>
        <button @click="showHeader = !showHeader">
            Active Header
        </button>
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue'

    export default {
    data() {
        return {
            name: 'Inacio',
            showHeader: true,
        };
    },
    // beforeCreate() {
    //     console.log('beforeCreate');
    //     console.log('State', this.name);
    //     console.log('DOM: ', this.$el);
    // },
    // created() {
    //     console.log('created');
    //     console.log('State: ', this.name);
    //     console.log('DOM: ', this.$el);
    // },
    // beforeMount() {
    //     console.log('beforeMount');
    //     console.log('State: ', this.name);
    //     console.log('DOM: ', this.$el);
    // },
    // mounted() {
    //     console.log('mounted');
    //     console.log('State: ', this.name);
    //     console.log('DOM: ', this.$el);
    // },

    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },

    // beforeUnmount() {
    //     console.log('beforeUnmount');
    //     console.log('State: ', this.name);
    //     console.log('DOM: ', this.$el);
    // },
    // unmounted() {
    //     console.log('unmounted');
    //     console.log('State: ', this.name);
    //     console.log('DOM: ', this.$el);
    // },
    watch: {},
    computed: {},
    methods: {},
    components: { TheHeader }
}
</script>