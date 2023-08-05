<template>
    <div>
        {{ $route.query.page }}
        Users
        <br>

        <button @click="login()">
            Login
        </button>
    </div>
</template>

<script>
    export default {
        created() {
            // console.log(ths.$route) // Actual route object
            // console.log(ths.$router) // Funcionaaidades d esqqema de rotamento
        },
        methods: {
            login() {
                // Ajax login
                this.$router.push({name: 'home'})
                console.log('loged')
            }
        }
    }
</script>