const app = Vue.createApp({
    // data, functions
    // template: '<h1>Into the template</h1>',
    data() {
        return {
            title: 'Data Example',
            author: 'IMR',
            age: 25,
            showTitle: true,
            showSubMenu: false,
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
        },
        toggleShowTitle() {
            this.showTitle = !this.showTitle
        },
        toggleButton() {
            this.showSubMenu = !this.showSubMenu
            // console.log('toggleButton')
        }
    },
})

app.mount('#app')