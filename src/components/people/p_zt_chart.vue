<template>
    <div id="p_zt_chart" class="main"></div>
</template>

<script>
    export default {
        name: "p_zt_chart",
        mounted() {
            this.p_zt_chart()
        },
        methods: {
            p_zt_chart() {
                var dom = document.getElementById("p_zt_chart");
                var myChart = this.$echarts.init(dom);

                let option = {
                    title: {
                        text: '涉稳人口状态',
                        textStyle: {
                            color: '#fff',
                            fontSize: '200%',
                            fontFamily: 'defaultFont'
                        },
                        right: 'center'
                    },
                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top: '10%',
                        left: '0%',
                        right: '1%',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisLabel: {
                            fontSize: '120%',
                            fontFamily: 'defaultFont',
                            color: "#fff",
                            margin: 5
                        },
                        axisTick: {
                            length: 3,
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#0cffe9",
                                width: 2
                            }
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            fontSize: '150%',
                            fontFamily: 'defaultFont',
                            color: "#fff",
                            margin: 5
                        },
                        axisTick: {
                            length: 3
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#0cffe9",
                                width: 2
                            }
                        },
                    }],
                    series: [{
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '40%',
                        data: [10, 52, 200, 334, 390, 330, 220],
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#C0FBBD'},
                                        {offset: 0.5, color: '#71F0D3'},
                                        {offset: 1, color: '#37E8E3'}
                                    ])
                            },
                            emphasis: { //hover时的颜色
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#2378f7'},
                                        {offset: 0.7, color: '#2378f7'},
                                        {offset: 1, color: '#83bff6'}
                                    ]
                                )
                            }
                        }
                    }]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
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