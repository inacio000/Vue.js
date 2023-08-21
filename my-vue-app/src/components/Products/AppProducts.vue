<template>
    <div>
        <AppProductVue 
            v-for="product in $store.state.products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script>
import AppProductVue from './AppProduct.vue';

    export default {
        data() {
            return {}
        },
        components: { AppProductVue}
    }
</script>