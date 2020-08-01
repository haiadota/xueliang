<template>
    <div id="cs_chart"></div>
</template>

<script>
    export default {
        name: "CsChart",
        data() {
          return {
              grade: ['文化交流', '体育娱乐', '住宿交际', '文化交流', '体育娱乐', '住宿交际'],
              visits: ['25', '67', '55', '25', '67', '55'],
          }
        },
        mounted() {
            this.cs_chart()
        },
        methods: {
            cs_chart() {
                var dom = document.getElementById("cs_chart");
                var myChart = this.$echarts.init(dom);
                var cost = [] //本期比上期（大于1按1处理）
                var totalCost = [] //比例综合
                var sum = 0
                for(let i = 0; i<this.visits.length; i++) {
                    sum += parseInt(this.visits[i])
                }
                for(let e of this.visits) {
                    cost.push((e/sum).toFixed(2))
                    totalCost.push(1)
                }
                var data = {
                    grade: this.grade,
                    cost: cost,
                    totalCost: totalCost,
                    visits: this.visits,
                };
                var option = {
                    //  backgroundColor: '#05274C',
                    grid: {
                        top: '5%',
                        bottom: '5%',
                        left: '25%',
                        right: '10%'
                    },
                    xAxis: {
                        show: false,
                    },
                    yAxis: {
                        minInterval: 0,
                        type: 'category',
                        axisLabel: {
                            show: true,
                            color: '#50d5f5',
                            fontSize: '150%'
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        data: data.grade,
                    },
                    series: [
                        {
                            type: 'bar',
                            barGap: '-100%',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    color: '#e79800',
                                    fontSize: '160%',
                                    formatter:
                                        function (param) {
                                            return data.visits[param.dataIndex];
                                        },
                                }

                            },
                            barWidth: '35%',
                            itemStyle: {
                                normal: {
                                    //borderColor: '#4DCEF8',
                                    borderWidth: 2,
                                    barBorderRadius: 15,
                                    color: 'rgba(102, 102, 102,0)'
                                },
                            },
                            z: 1,
                            data: data.totalCost,
                        },
                        {
                            type: 'bar',
                            barGap: '-98%',
                            barWidth: '30%',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 0,
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        x1: 1,
                                        colorStops: [{
                                            offset: 0,
                                            color: '#00709b'
                                        }, {
                                            offset: 1,
                                            color: '#00709b'
                                        }]
                                    }
                                },
                            },
                            max: 1,
                            labelLine: {
                                show: true,
                            },
                            z: 2,
                            data: data.cost,
                        }
                    ]
                }
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            }
        }
    }
</script>

<style scoped>
    #cs_chart {
        width: 100%;
        height: 75%;
    }
</style>