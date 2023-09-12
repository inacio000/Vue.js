<template>
      <p class="mt-4">Reaction Time: {{ score }} ms</p>
      <p class="mt-4 text-2xl text-green-600 font-bold">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'Ninja Fingers'
        } else if (this.score > 400) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'Snail pace.'
        }
    }
}
</script>