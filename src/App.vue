<template>
    <div id="app">
        <Header></Header>
        <transition name="bounce">
            <router-view></router-view>
        </transition>
        <iframe class="earth_home" style="border:none" id="threeDEarth" src></iframe>
    </div>
</template>

<script>
    import Header from "./components/Header.vue"
    import api from "./api/index"

    export default {
        name: "app",
        components: {
            Header
        },
        mounted() {
            document.getElementById("threeDEarth").src = api.TDEarth;
        }
    };
</script>

<style scoped>
    #app {
        width: 100%;
        height: 100%;
        /*position: relative;*/
    }

    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }

    @keyframes bounce-in {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.2;
        }
        100% {
            opacity: 0.8;
        }
    }
</style>
