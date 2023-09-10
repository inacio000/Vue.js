<template>
    <div @click.self="closeModal" class="w-full h-full top-0 fixed bg-modalbg">
        <div :class="{'w-96 h-40 p-5 my-24 mx-auto flex flex-col justify-center gap-8 bg-white rounded-lg relative': true, sale: theme === 'sale'}">
            <h1 class="text-3xl text-titlecolor font-bold">{{ header }}</h1>
            <p>{{ text }}</p>
            <span @click="closeModal" class="cursor-pointer absolute top-0 right-0 p-2">X</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'header',
            'text',
            'theme',
        ],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .sale {
        background: crimson;
        color: white;
    }

    .sale h1 {
        color: white;
    }
</style>