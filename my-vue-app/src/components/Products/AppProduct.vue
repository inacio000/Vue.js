<template>
    <div class="card">
        {{product.name}} - {{ product.price }}
        <br>
        <button @click="addProduct">
            Add to cart
        </button>
        <button @click="removeProduct">
            Remove Product
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            product: Object
        },
        methods: {
            addProduct() {
                this.$store.commit('addProduct', this.product);
                
            },
            removeProduct() {
                this.$store.commit('removeProduct', this.product.id);
            }
        }
    }
</script>

<style>
    .card {
        width: 50%;
        background: black;
        padding: 6px;
        margin: 0 auto 5px;
    }
</style>