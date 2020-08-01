<template>
    <transition name="showVR">
        <div class="border">
            <iframe width="100%" height="100%" :src="href"></iframe>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "TdMachineRoom",
        data() {
            return {};
        },
        props: {
            href: String,
        },
        methods: {}
    };
</script>

<style scoped>
    .border {
        flex: 1;
        background: url("../../assets/operation/tmroombg.png") no-repeat center;
        padding: 103px 330px;
    }

    .showVR-enter-active {
        animation: bounce-in 0.8s;
    }

    .showVR-leave-active {
        animation: bounce-in 0.8s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            transform: scale(0.5);
            opacity: 0.5;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>
