const app = Vue.createApp({
    // data, functions
    // template: '<h1>Into the template</h1>',
    data() {
        return {
            title: 'Data Example',
            author: 'IMR',
            age: 25
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Something else'
        },
        increaseAge() {
            this.age += 1
        },
        decreaseAge() {
            this.age -= 1
        }
    },
})

app.mount('#app')