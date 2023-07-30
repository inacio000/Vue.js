<template>
    <div>
        <button 
            @click.once="onClickFunction()"
        >
            Send Something
        </button>

        <form 
            action="https://google.com"
            @submit.prevent="onSubmit"
        >
            <input 
                type="text"
                @keydown="onKwyUp"
            >
            <button type="submit">
                Send to Google
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            onClickFunction($evt) {
                console.log("Clicked", $evt)
            },
            onMouseOverFunction() {
                console.log("Mouse Over")
            },
            onSubmit() {
                console.log("Submit")
            },
            onKwyUp($evt) {
                console.log("Kwy Up", $evt)
            }
        }
    }
</script>

<style>
</style>