<template>
    <div class="box">
        <div class="subTitle" v-if="chart_type=='chart_2'">XXXXX</div>
        <div :id="chart_name" :class="{chart:chart_type=='chart_noline'}" :style="chart_style"></div>
        <div class="subText" v-if="chart_type=='chart_1'">XXXXX</div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "perchart",
        data() {
            return {
                myChart: null
            }
        },
        props: ["chart_name", "title", "val", "percent", "chart_type", "chart_style", "chart_color"],
        methods: {
            chart() {
                var dom = document.getElementById(this.chart_name);
                this.myChart = echarts.init(dom);
                let option = {
                    //backgroundColor: '#394056',
                    color: ['#3e82f9'],
                    title: {
                        subtext: "磁盘总空间",
                        subtextStyle: {
                            color: '#ffffff',
                            fontSize: '200%',
                            lineHeight: 5,
                            fontWeight: 'normal'
                        },
                        text: '70%',
                        textStyle: {
                            color: '#00c4ff',
                            fontSize: '260%',
                            fontWeight: 'normal',
                            lineHeight: 1
                        },
                        x: 'center',
                        y: '42%'
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ['99.5%', '100%'],
                            center: ['50%', '50%'],
                            silent: true,
                            itemStyle: {
                                normal: {
                                    color: 'RGB(50,144,170,1)'
                                }
                            },
                            labelLine: {
                                normal: {show: false}
                            },
                            data: [{value: 10}, {value: 90}]
                        },
                        {
                            type: 'pie',
                            radius: ['70%', '90%'],
                            center: ['50%', '50%'],
                            silent: true,
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {
                                    value: 60//数据
                                },
                                {
                                    value: 40,
                                    itemStyle: {
                                        color: "transparent"
                                    }
                                }]
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            },
            chart1() {
                var dom = document.getElementById(this.chart_name);
                this.myChart = echarts.init(dom);
                let option = {
                    //backgroundColor: '#394056',
                    color: [this.chart_color],
                    title: {
                        text: '70%',
                        textStyle: {
                            color: this.chart_color,
                            fontSize: '200%',
                            fontWeight: 'normal'
                        },
                        x: 'center',
                        top: "center"
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ['89.5%', '90%'],
                            center: ['50%', '50%'],
                            silent: true,
                            itemStyle: {
                                normal: {
                                    color: '#374156'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [{
                                value: 10
                            }, {value: 90}]
                        }
                        , {
                            type: 'pie',
                            radius: ['70%', '90%'],
                            center: ['50%', '50%'],
                            silent: true,
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [{
                                value: 60//数据
                            }, {
                                value: 40,
                                itemStyle: {
                                    color: "transparent"
                                }
                            }]
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            },
            init() {
                if (this.chart_type == "chart") {
                    this.chart();
                } else if (this.chart_type == "chart_1") {
                    this.chart1();
                } else if (this.chart_type == "chart_2") {
                    this.chart1();
                } else {
                    this.chart();
                }
            },
        },
        mounted() {
            this.init();
        }
    }
</script>

<style scoped>
    .box {
        padding-top: 1rem;
    }

    .subText {
        font-size: .81rem;
        color: #fff;
        text-align: center;
        background-color: rgba(4, 106, 210, 0.32);
        margin: 1rem .5rem;
        border-left: 0.02rem solid #35ceff;
        border-right: 0.02rem solid #35ceff;
    }

    .subTitle {
        font-size: .81rem;
        color: #fff;
        text-align: center;
        margin: 1rem .5rem;
    }
</style>
