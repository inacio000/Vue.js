<template>
    <div class="w-80 bg-blockBg text-white text-center py-20 rounded-lg border my-20 mx-auto" v-if="showBlock">Click me!</div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    mounted() {
        console.log('component mounted')
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer()
            // console.log(this.delay)
        }, this.delay)
    },
    // updated() {
    //     console.log('component updated')
    // },
    // unmounted() {
    //     console.log('component unmounted')
    // },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer)
        }
    }
}
</script>