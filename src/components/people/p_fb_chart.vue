<template>
    <div id="p_fb_chart" class="main"></div>
</template>

<script>
    export default {
        name: "p_fb_chart",
        mounted() {
            this.p_fb_chart()
        },
        methods: {
            p_fb_chart() {
                var dom = document.getElementById("p_fb_chart");
                var myChart = this.$echarts.init(dom);

                var moption = null;
                moption = {
                    //backgroundColor:'rgba(255, 255, 255, 0)',
                    title: {
                        text: '涉稳人口分布',
                        left: 'center',
                        // top:25,
                        textStyle: {
                            fontSize: '200%',
                            fontFamily: 'defaultFont',
                            color: "#FFF"
                        }
                    },
                    tooltip: {
                        showContent: true,
                        trigger: 'axis',
                        textStyle: {
                            fontSize: '200%',
                            fontFamily: 'defaultFont'
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
                        top: '10%',
                        left: '0%',
                        right: '4%',
                        bottom: '2%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: {
                                fontSize: '150%',
                                fontFamily: 'defaultFont',
                                color: "#fff",
                                margin: 5
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#0cffe9",
                                    width: 2
                                }
                            },
                            axisTick: {
                                length: 3
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
                                fontFamily: 'defaultFont',
                                color: "#fff",
                                margin: 5
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#0cffe9",
                                    width: 2
                                }
                            },
                            axisTick: {
                                length: 3
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
                                color: "rgba(17,199,247)",
                                width: 2,
                                shadowColor: "rgba(17,199,247,0.7)",
                                shadowBlur: 40

                            },
                            // areaStyle: {
                            //     color: {
                            //         type: 'linear',
                            //         x: 0,
                            //         y: 0,
                            //         x2: 0,
                            //         y2: 1,
                            //         colorStops: [{
                            //             offset: 0, color: '#00defe' // 0% 处的颜色
                            //         }, {
                            //             offset: 1, color: 'rgba(255, 255, 255, 0)' // 100% 处的颜色
                            //         }],
                            //         global: false // 缺省为 false
                            //     }
                            // },

                            data: [120, 132, 101, 134, 90, 230, 210]
                        }
                    ]
                };
                if (moption && typeof moption === "object") {
                    myChart.setOption(moption, true);
                }
            }
        }
    }
</script>

<style scoped>
    .main {
        width: 100%;
        height: 100%;
    }
</style>