<template>
    <div class="light">
        <div class="s"></div>
        <div class="s"></div>
        <div class="s"></div>
        <div class="s"></div>
        <div class="s"></div>
        <div class="s"></div>
    </div>
</template>

<script>
    export default {
        name: "light"
    }
</script>

<style scoped>
.light{
    padding-right: 3rem;
}
    .s {
        width: .57rem;
        height: .57rem;;
        border-radius: 5%;
        float: left;
        margin-left: .20rem;;
    }


    .s:nth-child(1) {
        background: #ffec45;
        animation: bs linear 2s 1.1s infinite;
        opacity:1;
        box-shadow:0 0 8px 0 #ffec45;
    }

    .s:nth-child(2) {
        background: #ffec45;
        animation: bs linear 2s 1.5s infinite;
        opacity:0.5;
        box-shadow:0 0 8px 0 #ffec45;
    }

    .s:nth-child(3) {
        background: #ffec45;
        animation: bs linear 2s 1.9s infinite;
        opacity:0.15;
        box-shadow:0 0 8px 0 #ffec45;
    }

    .s:nth-child(4) {
        background: #00fffe;
        animation: bs linear 2s 1.1s infinite;
        opacity:1;
        box-shadow:0 0 8px 0 #00fffe;
    }

    .s:nth-child(5) {
        background: #00fffe;
        opacity:0.5;
        animation: bs linear 2s 1.5s infinite;
        box-shadow:0 0 8px 0 #00fffe;
    }

    .s:nth-child(6) {
        background: #00fffe;
        animation: bs linear 2s 1.9s infinite;
        opacity:0.15;
        box-shadow:0 0 8px 0 #00fffe;
    }


    @keyframes bs {
        50% {
            opacity:0.5
        }
        80% {
            opacity:0.15
        }
        100% {
            opacity:1
        }
    }
</style>
