<template>
    <h1 :class="{ 'title': true, 'title-home': isHome}">
        Curso Vue 3
    </h1>
    <p :class="['text']">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum optio, commodi id illo nesciunt nostrum a facere consequatur quod debitis iure, consequuntur voluptates aliquid illum nisi officiis provident ad nam?
    </p>
    <p :style="styleP">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora molestias, natus sit inventore molestiae necessitatibus debitis itaque corrupti eos eligendi quod adipisci magnam sequi architecto libero minus ad? Maxime, suscipit.
    </p>
    <div>
        <div 
            v-for="(obj, index) in todos"
            :key="obj.id"
            class="todos-items" 
        >
        <img 
            v-if="obj.imgSrc"
            :src="obj.imgSrc" 
            alt=""
        >
            {{ index }} - {{ obj.title }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ConditionalLoop',
        data() {
            return {
                styleP: {color: 'white', backgroundColor: 'black', 'padding': '5px 0', fontSize: '20px'},
                isHome: false,
                classVar: 'title',
                pClass: 'text',
                todos: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false,
                        "imgSrc": 'https://placeholder.com/100',
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false,
                        "imgSrc": 'https://placeholder.com/100',
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "et porro tempora",
                        "completed": true
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "completed": false
                    }
                ]
            }
        }
    }
</script>

<style>
    .title-home {
       font-size: 50px; 
       color: black;
    }

    .todos-items {
        background-color: cadetblue;
        margin-bottom: 5px;
    }

    .title {
        font-size: 40px;
        color: aliceblue;
    }

    .text {
        color: azure;
        font-size: 20px;
    }
</style>