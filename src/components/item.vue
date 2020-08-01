<template>
    <div :class="place">
        <div class="title">{{title}}</div>
        <hr>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "home_item",
        props: ['title', 'place'],
    }
</script>

<style scoped>
    .itemLeft {
        padding: 1.5rem 1rem 1.5rem 2rem;
    }

    .itemDefault {
        padding: 0.5rem;
        box-sizing: border-box;
    }

    .itemRight {
        padding: 1.5rem 2rem 1.5rem 1rem;
    }

    .title {
        font-size: 1.4rem;
        color: white;
        text-align: left;
        padding-left: .1rem;
    }

    hr {
        color: white;
        height: .05rem;
        background-color: white;
    }
</style>
