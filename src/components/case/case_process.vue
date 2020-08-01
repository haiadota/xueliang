<template>
    <div class="offdevices">
        <div class="cell" v-for="(dat,index) in dataSource" :key="index">
            <div class="txt_part">
                <div class="title">{{dat.title}}</div>
                <div class="value">{{dat.value}}</div>
            </div>
            <div class="chart_part">
                <div v-for="(i,ind) in maxCount" :class="[i <= dat.count?'color_zb':'color_nozb','bar']" :key="ind">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "caseprocess",
        data() {
            return {
                maxCount: 34,
                dataSource: [
                    {
                        title: "破案率统计",
                        value: 21,
                        count: 21
                    },
                    {
                        title: "重大案件侦破率",
                        value: 13,
                        count: 3
                    },
                    {
                        title: "刑事案件侦破率",
                        value: 20,
                        count: 5
                    }
                ]
            }
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
        padding: 0 2%;
    }

    .txt_part {
        display: flex;
        vertical-align: bottom;
        color: #00e6f8;
        font-size: 1rem;
    }

    .chart_part {
        height: 1.34rem;
        display: flex;
        border: 1px #0b2c42 solid;
        padding: 0.2rem;
        margin-top: 0.5rem;
    }

    .title {
        flex: 1;
        background: url('../../assets/case/caseCount_title.png') bottom left no-repeat;
        background-size: 8.4rem auto;
    }

    .value {
        padding-right: 1.5rem;
        padding-left: 1rem;
        border-bottom: 0.06rem solid #00e6f8;
        margin-bottom: .1rem;
    }

    .color_zb {
        background-color: #0f596c;
    }

    .color_nozb {
        background-color: #08384d;
    }

    .bar {
        width: 0.7rem;
        height: 1.24rem;
        margin-right: .1rem;
    }
</style>
