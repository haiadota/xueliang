<template>
    <div class="mBorder" ref="mBorder">
        <div class="box">
            <div :class="['rotate'+Math.floor(index/2), 'mylabel']" v-for="(dat,index) in dataSource" :key="index">
                <div class="title">{{dat.title}}:</div>
                <div class="cell">{{dat.value}}</div>
            </div>
            <div class="mylabel">
                <div class="title">{{dataSource[0].title}}:</div>
                <div class="cell">{{dataSource[0].value}}</div>
            </div>
            <div class="mylabel">
                <div class="title">{{dataSource[1].title}}:</div>
                <div class="cell">{{dataSource[1].value}}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "casearealabel",
        data() {
            return {
                maxCount: 23,
                dataSource: [
                    {title: "高新区", value: "5%", count: 2},
                    {title: "长德区", value: "13%", count: 6},
                    {title: "北湖区", value: "11%", count: 5},
                    {title: "空港区", value: "12%", count: 21}
                ]
            };
        },
        methods: {
            setStyles(index, count) {
                let val = 1 / count;
                val = 0 + val * index;
                if (val <= 0.2) {
                    val = 0.2;
                }
                return "background-color:rgba(85,237,249," + val + ");";
            }
        }
    };
</script>

<style scoped>
    .mBorder {
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding: 1rem 1.2rem 0;
    }

    .box {
        display: flex;
        animation: down-animation 35s linear infinite;
    }

    .box:hover {
        animation-play-state: paused;
    }

    @keyframes down-animation {
        to {
            transform: translateX(-265.5%);
        }
    }

    .mBorder::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .mylabel {
        background: url("../../assets/case/case_labelbg.png") left center no-repeat;
        background-size: 80% 90%;
        display: flex;
        height: 7.5rem;
        color: white;
    }

    .title {
        background-size: 8.4rem auto;
        font-size: 1.3rem;
        line-height: 7.6rem;
        width: 7.5rem;
        text-align: center;
    }

    .process {
        display: flex;
        flex: 1;
        background: url("../../assets/case/case_typebg.png") center no-repeat;
        background-size: 100% auto;
        padding-left: .65rem;
    }

    .item {
        border-radius: 0.05rem;
        width: .24rem;
        height: .94rem;
        margin-right: .35rem;
        margin-top: .84rem;
    }

    .cell {
        padding-left: 8.8rem;
        width: 4rem;
        font-size: 1.18rem;
        line-height: 7.6rem;
    }
</style>
