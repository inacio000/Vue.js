<template>
    <div @click.self="closeModal" class="w-full h-full top-0 fixed bg-modalbg">
        <div
            :class="{ 'w-96 h-fit p-5 my-24 mx-auto flex flex-col justify-center gap-2 bg-white rounded-lg relative': true, sale: theme === 'sale' }">
            <slot></slot>
            <div>
                <slot name="links"></slot>
            </div>
            <span @click="closeModal"
                class="cursor-pointer absolute top-0 right-0 m-2 px-1 border rounded hover:bg-gray-100 duration-300">x</span>
        </div>
    </div>
</template>

<script>
export default {
    props: [
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