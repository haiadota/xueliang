<template>
    <div class="circle_chart">
        <div class="title">{{title}}</div>
        <div :id="chart_name" :style="chart_style"></div>
    </div>
</template>

<script>
    export default {
        name: "circle_chart",
        data() {
            return {
                myChart: null
            }
        },
        props: ["chart_name", "title", "val", "percent", "chart_type", "chart_style"],
        methods: {
            chart3() {
                var dom = document.getElementById(this.chart_name);
                this.myChart = this.$echarts.init(dom);
                var scaleData = [
                    {'name': '刑事案件', 'value': 10},
                    {'name': '民事案件', 'value': 10},
                    {'name': '政治案件', 'value': 10},
                    {'name': '经济案件', 'value': 10}
                ];
                var rich = {
                    white: {
                        color: '#FFF',
                        align: 'center',
                        padding: [3, 0],
                        fontSize: '160%',
                        fontFamily: 'defaultFont'
                    }
                };
                var placeHolderStyle = {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                };
                var data = [];
                var color = ['#fafcfa', '#1da1aa', '#105c6c', '#0e3247', '#08d8d6']
                for (var i = 0; i < scaleData.length; i++) {
                    data.push({
                        value: scaleData[i].value,
                        name: scaleData[i].name,
                        // itemStyle: {
                        //     normal: {
                        //         borderWidth: 5,
                        //         shadowBlur: 20,
                        //         borderColor:color[i],
                        //         shadowColor: color[i]
                        //     }
                        // }
                    }, {
                        value: 2,
                        name: '',
                        itemStyle: placeHolderStyle
                    });
                }
                var seriesObj = [{
                    name: '',
                    type: 'pie',
                    clockWise: true,
                    radius: ['60%', '70%'],//大小
                    hoverAnimation: false,
                    color: color,
                    itemStyle: {
                        normal: {
                            // color: {
                            //     type: 'linear',
                            //     x: 0,
                            //     y: 0,
                            //     x2: 0,
                            //     y2: 1,
                            //     colorStops: [{
                            //         offset: 0, color: '#01fffe' // 0% 处的颜色
                            //     }, {
                            //         offset: 1, color: '#01fffe' // 100% 处的颜色
                            //     }],
                            //     global: false // 缺省为 false
                            // },
                            label: {
                                show: true,
                                position: 'outside',
                                color: '#00e4ff',
                                fontSize: '160%',
                                fontFamily: 'defaultFont',
                                formatter: function (params) {
                                    var percent = 0;
                                    var total = 0;
                                    for (var i = 0; i < scaleData.length; i++) {
                                        total += scaleData[i].value;
                                    }
                                    percent = ((params.value / total) * 100).toFixed(0);
                                    if (params.name !== '') {
                                        return '{white|' + percent + '%}\n' + params.name;
                                    } else {
                                        return '';
                                    }
                                },
                                rich: rich
                            },
                            labelLine: {
                                length: 16,
                                length2: 10,
                                show: true,
                                lineStyle: {
                                    width: 2
                                },
                                color: '#fff'
                            }
                        }
                    },
                    data: data
                }];
                let option = {
                    title: {
                        text: "案件",
                        textStyle: {
                            color: '#00fffe',
                            fontSize: '200%',
                            fontFamily: 'defaultFont',
                            // align: 'center'
                        },
                        x: 'center',
                        y: 'center',
                    },
                    //backgroundColor: '#04243E',
                    tooltip: {
                        show: false
                    },
                    legend: {
                        show: false
                    },
                    toolbox: {
                        show: false
                    },
                    series: seriesObj,
                    graphic: [
                        {
                            type: 'image',
                            id: 'logo',
                            left: 'center',
                            bottom: 'center',
                            z: 1000,
                            bounding: 'raw',
                            style: {
                                image: require("../../assets/case/case_totalbg.png"),
                                width: 105,
                                height: 105
                            }
                        }
                    ]
                }
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            },
            updateData(data) {
                if (!this.myChart) {
                    return;
                }

                //更新数据
                var option = this.myChart.getOption();
                option.series[0].data = data;
                this.myChart.setOption(option);
            }
        },
        mounted() {
            this.chart3();
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
