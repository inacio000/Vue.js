const { createApp, ref } = Vue

createApp({
    setup() {
    const message = ref('Hello vue.js!')
    return {
        message
    }
    }
}).mount('#app')