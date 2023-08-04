<template>
    <header style="background-color: burlywood;">
        <div>
            <slot/>
        </div>
        
        <h1>
            <slot name="title"/>
        </h1>

        <p>
            <slot name="description"/>
        </p>

        <p>
            <slot v-if="$slots.normal" name="normal"/>
        </p>
        
    </header>
</template>

<script>
    export default {
        mounted() {
            // console.log(this.$slots)
        }
    }
</script>