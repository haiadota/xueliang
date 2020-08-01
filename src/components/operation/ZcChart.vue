<template>
    <div id="zc_chart"></div>
</template>

<script>
    export default {
        name: "ZcChart",
        mounted() {
          this.zc_chart()
        },
        methods: {
            zc_chart() {
                //资产
                let dom = document.getElementById("zc_chart");
                let myChart = this.$echarts.init(dom);
                let option = {
                    title: {
                        text: ""
                    },
                    tooltip: {
                        trigger: "item",
                        textStyle: {
                            fontSize: '100%',
                            fontFamily: "defaultFont"
                        },
                        backgroundColor: "rgba(18,114,135,0.6)"
                    },
                    grid: {
                        top: '10%',
                        left: 0,
                        right: "3%",
                        bottom: 0,
                        containLabel: true
                    },

                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        axisTick: {
                            length: 3
                        },
                        axisLabel: {
                            color: "#fff",
                            fontSize: '140%',
                            fontFamily: "defaultFont"
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#115372",
                                width: 2
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                width: 5
                            }
                        },
                        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                    },
                    yAxis: {
                        axisTick: {
                            length: 3
                        },
                        axisLabel: {
                            color: "#fff",
                            fontSize: '140%',
                            fontFamily: "defaultFont"
                        },

                        axisLine: {
                            lineStyle: {
                                //color:"#115372",
                                width: 2
                            }
                        },
                        type: "value"
                    },
                    series: [
                        {
                            name: "视频设备",
                            type: "line",
                            stack: "总量",
                            lineStyle: {
                                width: 2
                            },
                            symbol: "roundRect", //设定为实心点
                            symbolSize: [6, 8], //设定实心点的大小
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: "网络设备",
                            type: "line",
                            stack: "总量",
                            lineStyle: {
                                width: 2
                            },
                            symbol: "roundRect", //设定为实心点
                            symbolSize: [6, 8], //设定实心点的大小
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: "WIFI设备",
                            type: "line",
                            stack: "总量",
                            lineStyle: {
                                width: 2
                            },
                            symbol: "roundRect", //设定为实心点
                            symbolSize: [6, 8], //设定实心点的大小
                            data: [320, 332, 301, 334, 390, 330, 320]
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },
        }
    }
</script>

<style scoped>
    #zc_chart{
        width: 100%;
        height: 100%;
    }
</style>