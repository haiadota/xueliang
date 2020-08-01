<template>
    <div class="offdevices">
        <div class="item" v-for="(dat,index) in dataSource" :key="index">
            <div class="txt_part">
                <div class="left_part">{{dat.title}}</div>
                <div class="right_part">{{dat.value}}%</div>
            </div>
            <div class="chart_part">
                <div class="bar" :style="'width:'+dat.count+'%'"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "offdevices",
        data() {
            return {
                dataSource: [
                    {
                        title: "CPU使用率",
                        value: 78,
                        count: 90
                    },
                    {
                        title: "CPU使用率",
                        value: 13,
                        count: 3
                    },
                    {
                        title: "CPU使用率",
                        value: 20,
                        count: 15
                    },
                    {
                        title: "输出量",
                        value: 12,
                        count: 2
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .offdevices {
        color: white;
    }

    .offdevices .item {
        height: 3rem;
        margin: .8rem auto;
    }

    .txt_part {
        display: flex;
        vertical-align: bottom;
    }

    .txt_part .left_part {
        font-size: 1.2rem;
        color: #fff;
    }

    .txt_part .right_part {
        color: #41b8d3;
        font-size: 1.4rem;
        padding-right: 1.5rem;
        padding-left: 1rem;
        margin-bottom: 0.1rem;
    }

    .chart_part {
        height: 0.4rem;
        display: flex;
    }

    .chart_part .bar {
        border-radius: 0.05rem;
        height: 100%;
        background-color: #41b8d3;
        margin-right: 0;
    }
</style>
