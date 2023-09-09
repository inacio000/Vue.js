<template>
    <div class="w-full h-full top-0 fixed bg-modalbg">
        <div :class="{'w-96 h-40 p-5 my-24 mx-auto flex flex-col justify-center gap-8 bg-white rounded-lg': true, sale: theme === 'sale'}">
            <h1 class="text-3xl text-titlecolor font-bold">{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'header',
            'text',
            'theme',
        ]
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