<template>
    <button @click="sendData">
        {{ variant }}
        <slot></slot>
        <slot name="icon" />
    </button>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'Success'
        }
    },

    setup(props, {emit}) {
        console.log(props.variant)

        const sendData = () => {
            emit('update', props.variant)
        }

        return {
            sendData
        }
    }
}
</script>