<template>
    <div class="box">
        <div class="month">{{month}}</div>
        <div class="num">
            <span>案件:</span><span class="txt">{{val}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "monthCount",
        props: ["month", "val"]
    }
</script>

<style scoped>
    .box {
        text-align: center;
        width: 6rem;
        padding: 0.5rem .67rem 0;
    }

    .month {
        background: url("../../assets/case/monthbg.png") center no-repeat;
        background-size: 100% 100%;
        text-align: center;
        font-size: .92rem;
        color: #cef9fe;
        font-weight: bold;
        line-height: 3.5rem;
        margin-bottom: 1rem;
    }

    .num {
        font-size: .83rem;
        color: #00fff6;
        font-weight: bold;
        text-align: center;
        background: url("../../assets/case/monthbg_line.png") bottom no-repeat;
        background-size: 100% 10%;
        padding-bottom: .5rem;
    }

    .txt {
        color: white;
    }
</style>
