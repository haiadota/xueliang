<template>
    <div class="circle_chart">
        <div :id="chart_name" :style="chart_style"></div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "case_bar_chart",
        props: ["chart_name", "title", "val", "percent", "chart_type", "chart_style"],
        methods: {
            init() {
                let dom = document.getElementById(this.chart_name);
                this.myChart = this.$echarts.init(dom);
                var option = {
                    grid: {
                        top: '7%',
                        left: '-4',
                        right: '0',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: {
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(1,255,254,1)',
                                width: 2
                            }
                        },
                        axisLabel: {
                            color: '#fff',
                            fontSize: '129%',
                            margin: 8,
                            showMaxLabel: true,
                            height: 10
                        },
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    yAxis: {
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(1,255,254,0.42)',
                                width: 2
                            }
                        },
                        axisLabel: {
                            color: '#fff',
                            fontSize: '150%'
                        },
                        splitLine: {show: false}
                    },
                    animationEasing: 'elasticOut',
                    series: [
                        {
                            type: 'pictorialBar',
                            symbol: 'rect',
                            symbolRepeat: true,
                            symbolSize: [6, 2.5],
                            itemStyle: {
                                color: '#57ffeb'
                            },
                            data: [
                                {value: 10,},
                                {value: 29,},
                                {value: 100,},
                                {value: 21,},
                                {value: 45,},
                                {value: 60,},
                                {value: 80,},
                                {value: 95,},
                                {value: 55,},
                                {value: 30,},
                                {value: 58,},
                                {value: 78,}
                            ]
                        }
                        ,
                        {
                            name: '外框',
                            type: 'bar',
                            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                            barWidth: 10,
                            itemStyle: {
                                normal: {
                                    borderColor: 'rgba(1,255,254,1)',
                                    borderWidth: 1,
                                    barBorderRadius: 15,
                                    color: 'rgba(102, 102, 102,0)',
                                    barBorderRadius: 1
                                }
                            },
                            z: 0
                        }
                    ]
                };
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
    .circle_chart {
        height: 100%;
        display: flex;
    }

    .circle_chart .title {
        flex: 1;
        line-height: 2rem;
        font-size: 1.28rem;
        color: #fff;
        writing-mode: vertical-lr;
        text-align: center;
    }
</style>
