<template>
    <div id="home_item" :class="place">
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
        padding: 1.05rem 1.37rem 0 2.7rem;
    }

    .itemDefault {
        padding: .4rem .4rem 0;
    }

    .itemRight {
        padding: 1.05rem 2.9rem 0 1.65rem;
    }

    .title {
        font-size: 1.14rem;
        color: white;
        text-align: left;
        padding-left: 3%;
        line-height: 2rem;
    }

    hr {
        color: white;
        width: 94%;
        height: .05rem;
        background-color: white;
        margin: auto;
    }
</style>
