<template>
    <header>
        <h2>Header Component</h2>
    </header>        
</template>

<script>
    export default {
        beforeUnmount() {
            // Destruir as libs, eventos, listners
            // console.log('beforeUnmount');
            // console.log('State: ', this.name);
            // console.log('DOM: ', this.$el);

            // window.removeEventListener('resize', this.resize)
        },
        mounted() {
            // window.addEventListener('resize', this.resize)
        },
        unmounted() {
            // console.log('unmounted');
            // console.log('State: ', this.name);
            // console.log('DOM: ', this.$el);
        },

        methods: {
            // resize($evt) {
            //     console.log($evt);
            // }
        }
    }
</script>

<style>
    header {
        background-color: darkcyan;
        color: white;
    }
</style>