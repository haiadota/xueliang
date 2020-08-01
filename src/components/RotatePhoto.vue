<template>
    <div class="rotate_photo">
        <div id="carousel">
            <figure>
                <div class="pic"><img src="../assets/home/500x500.png" alt=""></div>
                <div class="name">人脸识别</div>
            </figure>
            <figure>
                <div class="pic"><img src="../assets/home/500x500.png" alt=""></div>
                <div class="name">人脸识别</div>
            </figure>
            <figure>
                <div class="pic"><img src="../assets/home/500x500.png" alt=""></div>
                <div class="name">人脸识别</div>
            </figure>
            <figure>
                <div class="pic"><img src="../assets/home/500x500.png" alt=""></div>
                <div class="name">人脸识别</div>
            </figure>
            <figure>
                <div class="pic"><img src="../assets/home/500x500.png" alt=""></div>
                <div class="name">人脸识别</div>
            </figure>
            <figure>
                <div class="pic"><img src="../assets/home/500x500.png" alt=""></div>
                <div class="name">人脸识别</div>
            </figure>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RotatePhoto",
        data() {
            return {
                list: []
            }
        }
    }
</script>

<style scoped>
    .rotate_photo {
        margin: 0 auto;
        width: 30%;
        position: relative;
        perspective: 26rem;
    }

    #carousel {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        transform-origin: center;
        animation: rotation 30s infinite linear;
    }

    #carousel:hover {
        animation-play-state: paused;
    }

    #carousel figure {
        position: absolute;
        width: 100%;
        height: 7rem;
        top: 6.2rem;
        overflow: hidden;
        padding: .15rem;
        background: url("../assets/home/ph_bg.png") no-repeat center;
        background-size: cover;
    }

    #carousel figure .name {
        width: 100%;
        height: 22%;
        white-space: nowrap;
        background: #0f364f;
        color: #4cecff;
        font-size: 1.1rem;
        line-height: 2rem;
        text-align: center;
    }
    #carousel .pic{
        height: 78%;
}
    img {
        filter: grayscale(1);
        cursor: pointer;
        transition: all 0.3s ease 0s;
        width: 100%;
        height: 100%;
    }

    img:hover {
        filter: grayscale(0);
        transform: scale(1.2, 1.2);
    }

    #carousel figure:nth-child(1) {
        transform: rotateY(0deg) translateZ(4.5rem);
    }

    #carousel figure:nth-child(2) {
        transform: rotateY(60deg) translateZ(4.5rem);
    }

    #carousel figure:nth-child(3) {
        transform: rotateY(120deg) translateZ(4.5rem);
    }

    #carousel figure:nth-child(4) {
        transform: rotateY(180deg) translateZ(4.5rem);
    }

    #carousel figure:nth-child(5) {
        transform: rotateY(240deg) translateZ(4.5rem);
    }

    #carousel figure:nth-child(6) {
        transform: rotateY(300deg) translateZ(4.6rem);
    }

    @keyframes rotation {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(360deg);
        }
    }
</style>
