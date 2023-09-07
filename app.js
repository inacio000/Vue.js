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
            hamburgerIcon: '/icons/hamburger.png',
            closeIcon: '/icons/close.png',
            x: 0,
            y: 0,
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                    image: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/1.jpg',
                    isFav: true
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                    image: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/2.jpg',
                    isFav: false
                },
                {
                    title: 'the final empire',
                    author: 'brandon sanderson',
                    image: 'https://raw.githubusercontent.com/iamshaunjp/Vue-3-Firebase/lesson-13/assets/3.jpg',
                    isFav: false
                },
            ]
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
        },
        handleEvents(e, data) {
            console.log(e, e.type)
            if (data) {
                alert(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleCard(book) {
            book.isFav = !book.isFav
            // console.log('clicked')
        }
    },
    computed: {
        filteredBook() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')