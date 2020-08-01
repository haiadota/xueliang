<template>
    <div id="zhChart"></div>
</template>

<script>
    export default {
        name: "ZhChart",
        mounted() {
            this.zh_chart();
        },
        methods: {
            //指挥中心图表
            zh_chart() {
                var dom = document.getElementById("zhChart");
                var myChart = this.$echarts.init(dom);
                var moption = null;
                moption = {
                    //backgroundColor:'rgba(255, 255, 255, 0)',
                    title: {
                        text: '单位:%',
                        left: '8%',
                        top: '2%',
                        textStyle: {
                            fontSize: '120%',
                            color: "#00e4ff"
                        }
                    },
                    tooltip: {
                        showContent: true,
                        trigger: 'axis',
                        textStyle: {
                            fontSize: '150%'
                        },
                        formatter: '{c}'
                        // axisPointer: {
                        //     type: 'cross',
                        //     label: {
                        //         fontSize:69.69,
                        //         backgroundColor: '#6a7985'
                        //     }
                        // }
                    },
                    //color:[],
                    animation: true,
                    grid: {
                        top: '15%',
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: {
                                fontSize: '150%',
                                color: "#00e4ff",
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#00e4ff"
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    // 使用深浅的间隔色
                                    color: '#fff'
                                }
                            },
                            boundaryGap: false,
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
                        }
                    ],
                    yAxis: [
                        {
                            axisLabel: {
                                fontSize: '150%',
                                color: "#00e4ff",
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#00e4ff"
                                }
                            },
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '指挥中心',
                            type: 'line',
                            stack: '总量',
                            smooth: true,
                            lineStyle: {
                                color: "#0068c0"
                            },
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#00defe' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(255, 255, 255, 0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        }
                    ]
                };
                if (moption && typeof moption === "object") {
                    myChart.setOption(moption, true);
                }
            },
        }
    }
</script>

<style scoped>
    #zhChart {
        width: 100%;
        height: 100%;
    }
</style>