<template>
    <div>
        {{ fullName }} <br>
        <h2>Completed Todos</h2>
        <div
            class="uncompleted"
            v-for="todo in uncompletedTodos"
            :key="todo.id" 
        >
            {{ todo.title }}
        </div>

        <h2>Completed Todos</h2>
        <div
            class="completed"
            v-for="todo in completedTodos"
            :key="todo.id" 
        >
            {{ todo.title }}
        </div>

        <br>
        <h2>Todos</h2>
        <div
            v-for="todo in todos"
            :key="todo.id" 
        >
            <input 
                type="checkbox"
                v-model="todo.completed"
            >
            {{ todo.title }}
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    firstName: "Inacio",
                    lastName: "Raimundo"
                },
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
        },
        computed: {
            fullName() {
                return `${this.user.firstName} ${this.user.lastName}`
            },

            uncompletedTodos() {
                return this.todos.filter(todo => !todo.completed)
            },

            completedTodos() {
                return this.todos.filter(todo => todo.completed)
            },
        }
    }
</script>

<style>
    .completed {
        color: rgb(7, 129, 7);
    }

    .uncompleted {
        color: rgb(183, 1, 1);
    }
</style>