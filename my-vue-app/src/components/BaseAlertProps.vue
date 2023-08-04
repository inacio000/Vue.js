<template>
    <div :class="baseClass">
        <slot/>

        <div>
            <button @click="onClick">X</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            variant: {
                type: String,
                default: ''
            },
        },
        computed: {
            baseClass() {
                return [
                    'alert',
                    this.variant ? `alert-${this.variant}` : '',
                ]
            }
        },
        
        methods: {
            onClick() {
                this.$emit('close')
                console.log('Button clicked!')
            }
        }
    }
</script>

<style>
    .alert {
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        background: #ddd;
        color: black;
        border-radius: 5px;
    }

    .alert-success {
        background: green;
        color: white;
    }

    .alert-danger {
        background: red;
        color: white;
    }
</style>