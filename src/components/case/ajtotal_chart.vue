<template>
    <div class="total_chart">
        <div :style="chart_style" class="box">
            <div class="chart" :id="chart_name"></div>
        </div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "ajtotal_chart",
        props: ["chart_name", 'chart_style', 'title'],
        data() {
            return {}
        },
        methods: {
            init() {
                let dom = document.getElementById(this.chart_name);
                this.myChart = echarts.init(dom);
                let option = {
                    title: {
                        text: '80%',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            color: '#00fcff',
                            fontSize: '300%',
                            fontFamily: 'defaultFont',
                            textShadowColor: 'rgba(0,255,254,0.4)',
                            textShadowBlur: 50,
                            textBorderWidth: 10
                        }
                    },
                    color: ['rgba(176, 212, 251, 0)'],
                    legend: {
                        show: false,
                        itemGap: 12,
                        data: ['01', '02']
                    },

                    series: [{
                        name: 'Line 1',
                        type: 'pie',
                        clockWise: true,
                        radius: ['60%', '69%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        hoverAnimation: false,
                        data: [{
                            value: 80,
                            name: '01',
                            itemStyle: {
                                normal: {
                                    color: { // 完成的圆环的颜色
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0,
                                            color: 'rgba(22,252,255,0.3)' // 0% 处的颜色
                                        }, {
                                            offset: 0.7,
                                            color: 'rgba(22,252,255,1)' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: 'rgba(22,252,255,0.1)' // 100% 处的颜色
                                        }]
                                    },
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                }
                            }
                        }, {
                            name: '02',
                            value: 20
                        }]
                    },
                        {
                            name: 'Line 1',
                            type: 'pie',
                            clockWise: true,
                            radius: ['51%', '61%'],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                }
                            },
                            hoverAnimation: false,
                            data: [{
                                name: '02',
                                value: 0
                            }, {
                                value: 100,
                                name: '01',
                                itemStyle: {
                                    normal: {
                                        color: { // 完成的圆环的颜色
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: 'rgba(0,252,255,0.6)' // 0% 处的颜色
                                            }, {
                                                offset: 1,
                                                color: 'rgba(0,252,255,0)' // 100% 处的颜色
                                            }]
                                        },
                                        label: {
                                            show: false
                                        },
                                        labelLine: {
                                            show: false
                                        }
                                    }
                                }
                            }]
                        }]
                }
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style scoped>
    .box{
        margin: 0 auto;
        background: url("../../assets/case/today_chartbg.png") center no-repeat;
        background-size: 106% 106%;
    }

    .chart {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .title {
        background: url("../../assets/case/today_chartbg_title.png") bottom center no-repeat;
        background-size: 32% 60%;
        padding: .2rem 0;
        font-size: 1.4rem;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
</style>
