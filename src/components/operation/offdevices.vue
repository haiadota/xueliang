<template>
    <div class="offdevices">
        <div class="data_item" v-for="(dat,index) in dataSource" :key="index">
            <div class="txt">
                <div class="left_part">{{dat.ptztypename}}</div>
                <div class="right_part">{{dat.num}}</div>
            </div>
            <div class="chart">
                <div class="chart_item" v-for="(n,i) in parseInt(dat.count)" :key="index+i"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from "../../api/index"

    export default {
        name: "offdevices",
        data() {
            return {
                dataSource: [
                    {
                        ptztypename: "摄像头",
                        num: 13,
                        count: 3
                    },
                    {
                        ptztypename: "网络故障",
                        num: 20,
                        count: 5
                    },
                    {
                        ptztypename: "电子围栏",
                        num: 12,
                        count: 2
                    }
                ]
            }
        },
        mounted() {
            this.getOfflineStat()
        },
        methods: {
            async getOfflineStat() {
                try {
                    const res = await this.$http.post(api.getOfflineStat, {}, {params: {realCount: '20'}})
                    if (res.status == '200' && res.data && Array.isArray(res.data.data)) {
                        this.dataSource = res.data.data
                    }
                } catch (e) {
                    console.log(e)
                }
            },
        }
    }
</script>

<style scoped>
    .offdevices {
        color: white;
    }

    .offdevices .data_item {
        height: 1.86rem;
        margin: .8rem auto;
    }

    .offdevices .data_item .txt {
        display: flex;
        justify-content: space-between;
    }

    .offdevices .data_item .txt .left_part {
        font-size: 1.3rem;
        color: #00e6f8;
    }

    .offdevices .data_item .txt .right_part {
        width: 15%;
        font-size: 1.3rem;
        text-align: center;
        padding: 0 1.5rem 0 1rem;
        border-left: 0.06rem solid #2e384b;
        margin-bottom: .1rem;
    }

    .offdevices .data_item .chart {
        height: .222rem;
        background-color: #2e384b;
        display: flex;
    }

    .offdevices .data_item .chart .chart_item {
        width: 5%;
        height: 100%;
        background-color: #00e6f8;
        margin-right: .1rem;
    }
</style>
