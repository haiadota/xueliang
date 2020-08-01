<template>
    <div id="p_nl_chart" class="main"></div>
</template>

<script>
    export default {
        name: "p_nl_chart",
        mounted() {
            this.p_nl_chart()
        },
        methods: {
            p_nl_chart() {
                var dom = document.getElementById("p_nl_chart");
                var myChart = this.$echarts.init(dom);
                var cost = [0.2, 0.8, 1, 0.5, 0.201, 1]//本期比上期（大于1按1处理）
                var dataCost = [1000.01, 200000, 200, 1000.01, 2000, 500]//真是的金额
                var totalCost = [1, 1, 1, 1, 1, 1]//比例综合
                var visits = [92, 50, 89, 92, 102, 100]//本期占总的百分比*100
                var grade = ['0-18', '18-30', '30-40', '40-55', '55-60', '65以上']
                var data = {

                    grade: grade,
                    cost: cost,
                    totalCost: totalCost,
                    visits: visits,
                    dataCost: dataCost
                };
                var option = {
                    grid: {
                        top: '0%',
                        bottom: '0%',
                        left: '5%',
                        right: '20%'
                    },
                    xAxis: {
                        show: false,
                    },
                    yAxis: {
                        type: 'category',
                        position: 'right',
                        axisLabel: {
                            margin: 12,
                            show: true,
                            color: '#FFF',
                            fontSize: '160%',
                            fontFamily: 'defaultFont'
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        data: data.grade
                    },
                    series: [{
                        type: 'bar',
                        //barGap: '-100%',
                        label: {
                            normal: {
                                show: false,
                                position: 'right',
                                color: '#e79800',
                                fontSize: '200%',
                                fontFamily: 'defaultFont',
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
                                barBorderRadius: 2,
                                color: 'rgba(17, 199, 247,0)'
                            },
                        },
                        z: 1,
                        data: data.totalCost,
                        // data: da
                    }, {
                        type: 'bar',
                        barGap: '-98%',
                        barWidth: '45%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 0,
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    x1: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#39e5cb'
                                    }, {
                                        offset: 1,
                                        color: '#18feaa'
                                    }]
                                }
                            },
                        },
                        max: 1,
                        label: {
                            normal: {
                                show: false,
                                position: 'left',
                                color: '#fff',
                                fontSize: 14,
                                fontFamily: 'defaultFont'
                                // formatter: function(param) {
                                //     return "";
                                //     // if(param.dataIndex=='0'){
                                //     //     return data.dataCost[param.dataIndex] + '元';
                                //     // }
                                //     // if(param.dataIndex=='1'){
                                //     //   return data.dataCost[param.dataIndex];
                                //     // }
                                //     // if(param.dataIndex=='2'){
                                //     //   return data.dataCost[param.dataIndex] + '万';
                                //     // }
                                //
                                // },
                            }
                        },
                        labelLine: {
                            show: true,
                        },
                        z: 2,
                        data: data.cost,
                    }]
                }
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            }
        }
    }
</script>

<style scoped>
    .main {
        height: 100%;
        width: 100%;
    }
</style>