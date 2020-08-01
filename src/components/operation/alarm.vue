<template>
    <div class="offdevices">
        <div class="item" v-for="(dat,index) in dataSource" :key="index">
            <div class="txt_part">
                <div class="left">{{dat.title}}</div>
                <div class="right" :style="{color:valColor}">{{dat.value}}</div>
            </div>
            <div class="chart_part">
                <div class="cell" v-for="(n,i) in dat.count" :key="i"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "offdevices",
        props: {
            valColor: {
                type: String,
                default: () => '#FFF'
            },
            dataSource: {
                type: Array,
                default: () => [
                    {
                        title: "紧急",
                        value: 13,
                        count: 3
                    },
                    {
                        title: "重要",
                        value: 13,
                        count: 3
                    },
                    {
                        title: "一般",
                        value: 20,
                        count: 5
                    },
                    {
                        title: "提示",
                        value: 12,
                        count: 2
                    }
                ]
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .offdevices {
        color: white;
    }

    .offdevices .item {
        height: 1.8rem;
        margin: 0.8rem auto;
    }

    .offdevices .txt_part {
        display: flex;
        vertical-align: bottom;
    }

    .offdevices .txt_part .left {
        font-size: 1.2rem;
        color: #fff;
        flex: 1;
    }

    .offdevices .txt_part .right {
        font-size: 1.2rem;
        padding-right: 1.5rem;
        padding-left: 1rem;
        margin-bottom: .1rem;
    }

    .offdevices .chart_part {
        height: 0.22rem;
        background-color: #1b1b1b;
        display: flex;
    }

    .offdevices .chart_part .cell {
        width: 1.46rem;
        height: 0.22rem;
        background-color: #00e6f8;
        margin-right: 0;
    }
</style>
