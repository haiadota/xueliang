<template>
    <div class="offdevices">
        <div class="cell" v-for="(dat,ind) in dataSource" :key="ind">
            <div class="title">{{dat.title}}:</div>
            <div class="process">
                <div class="item_bg" :style="setStyles(index,dat.count)" v-for="(item, index) in dat.count"
                     :key="index"></div>
                <div class="item_dot"></div>
            </div>
            <div class="item_line">{{dat.value}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "casetypeprocess",
        data() {
            return {
                maxCount: 23,
                dataSource: [
                    {
                        title: "民事案件",
                        value: "1211件",
                        count: 21
                    },
                    {
                        title: "刑事案件",
                        value: "5件",
                        count: 2
                    },
                    {
                        title: "行政案件",
                        value: "13件",
                        count: 6
                    },
                    {
                        title: "经济案件",
                        value: "11件",
                        count: 5
                    }
                ]
            }
        },
        methods: {
            setStyles(index, count) {
                let val = 1 / count;
                val = (0 + val * index);
                if (val <= 0.2) {
                    val = 0.2;
                }
                return "background-color:rgba(85,237,249," + val + ");"
            },
        }
    }
</script>

<style scoped>
    .offdevices {
        height: calc(100% - 1.2rem);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .cell {
        display: flex;
    }

    .title {
        background-size: 8.4rem auto;
        font-size: 1rem;
        line-height: 2.6rem;
    }

    .process {
        display: flex;
        flex: 1;
        background: url("../../assets/case/case_typebg.png") center no-repeat;
        background-size: 100% auto;
        padding-left: .65rem;
    }

    .item_bg {
        border-radius: 0.05rem;
        width: .24rem;
        height: 1rem;
        margin-right: 0.35rem;
        margin-top: 0.84rem
    }

    .item_dot {
        border-radius: .25rem;
        width: .56rem;
        height: 2.38rem;
        margin-right: .35rem;
        background-color: #54edf8;
    }

    .item_line {
        padding-left: .8rem;
        width: 4rem;
        font-size: 1rem;
        line-height: 2.6rem;
    }
</style>
