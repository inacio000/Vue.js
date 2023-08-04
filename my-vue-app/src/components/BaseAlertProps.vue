<template>
    <div :class="baseClass">
        {{ test }}
        <slot/>
    </div>
</template>

<script>
    export default {
        props: {
            variant: {
                type: String,
                default: ''
            }, 
            test: {
                type: String,
                default: 'test'
            }
        },
        computed: {
            baseClass() {
                return [
                    'alert',
                    this.variant ? `alert-${this.variant}` : '',
                ]
            }
        }
    }
</script>

<style>
    .alert {
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