<template>
    <div>
        <input 
            type="text"
            v-model="name"
        > <br>
        {{ name }}
        <br>

        <input 
        type="text"
            v-model="user.firstName"
        > <br>
        <br>

        <input 
        type="text"
            v-model="user.lastName"
        > <br>
        {{ user.firstName }} {{ user.lastName }}
        <br>

        <select v-model="pageCount">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        <br>
        {{ pageCount }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                pageCount: '5',
                user: {
                    firstName: '',
                    lastName: '',
                }
            }
        },
        watch: {
            name(value) {
                if (value.length > 6) {
                    this.saveUserName()
                }
            },
            pageCount() {
                this.changePage();
            },
            user: {
                handler() {
                    console.log('User changed')
                },
                deep: true,
            }
        },
        methods: {
            saveUserName() {
                console.log('Ajax')
                console.log(this.name);
            },
            changePage() {
                console.log('Ajax changePage')
            }
        }
    }
</script>