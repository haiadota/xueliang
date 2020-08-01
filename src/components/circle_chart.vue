<template>
    <div class="circle_chart" :style="chart_style">
        <div class="title" v-if="chart_type=='chart_line'&&title!=''">{{title}}</div>
        <div :id="chart_name" :class="[{chart:chart_type=='chart_noline'},'box']"></div>
    </div>
</template>

<script>
    export default {
        name: "circle_chart",
        data() {
            return {
                myChart:null,
                val: 10,
                percent: 10,
                scaleData: [
                    {'name': '常驻人口', 'value': 10},
                    {'name': '暂住人口', 'value': 6},
                    {'name': '涉稳人口', 'value': 3},
                ]
            }
        },
        props: ["chart_name", "title", "chart_type", "chart_style", "titleText"],
        methods: {
            chart() {
                var dom = document.getElementById(this.chart_name);
                this.myChart = this.$echarts.init(dom);
                var dataStyle = {
                    normal: {
                        label: {show: false},
                        labelLine: {show: false},
                        shadowBlur: 40,
                        shadowColor: 'rgba(40, 40, 40, 0.5)',
                    }
                };
                var placeHolderStyle = {
                    normal: {
                        color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                        label: {show: false},
                        labelLine: {show: false}
                    },
                    emphasis: {color: 'rgba(44,59,70,1)'}//未完成的圆环的颜色
                };
                var option = {
                    title: {
                        text: this.val,
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            color: "#FFF",
                            fontSize: '200%',
                            fontFamily: 'defaultFont'
                        }
                    },
                    // backgroundColor: '#011128',
                    color: ['#00deff', '#313443', '#FFF'],
                    tooltip: {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series: [
                        {
                            name: 'Line 1',
                            type: 'pie',
                            clockWise: false,
                            radius: ['85%', '92%'],
                            itemStyle: dataStyle,
                            hoverAnimation: false,
                            data: [{
                                value: this.percent,
                                name: '01'
                            }, {
                                value: 100 - this.percent,
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            }
                            ]
                        },
                        {
                            name: 'Line 2',
                            type: 'pie',
                            clockWise: false,
                            radius: ['98%', '100%'],
                            itemStyle: dataStyle,
                            hoverAnimation: false,
                            tooltip: {show: false},
                            data: [
                                {
                                    value: 40,
                                    name: '02',
                                    itemStyle: {
                                        emphasis: {color: '#000f24'}
                                    }
                                },
                                {
                                    value: 0,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            },
            chart_legend() {
                var dom = document.getElementById(this.chart_name);
                this.myChart = this.$echarts.init(dom);
                var dataStyle = {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        shadowBlur: 40,
                        shadowColor: 'rgba(40, 40, 40, 0.5)',
                    }
                };
                var placeHolderStyle = {
                    normal: {
                        color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
                    }
                };
                var option = {
                    title: {
                        text: this.val + '%',
                        x: '20%',
                        y: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            color: "#FFF",
                            fontSize: '400%',
                            fontFamily: 'defaultFont'
                        }
                    },
                    // backgroundColor: '#011128',
                    color: ['#00deff', '#313443', '#FFF'],
                    tooltip: {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: true,
                        bottom: 10,
                        right: 10,
                        orient: 'vertical',
                        itemGap: 2,
                        itemWidth: 16,
                        itemHeight: 5,
                        data: ['个体上访', '群体上访'],
                        textStyle: {
                            fontSize: '180%',
                            fontFamily: 'defaultFont',
                            color: '#FFF'
                        }
                    },
                    // toolbox: {
                    //     show: false,
                    //     feature: {
                    //         mark: {
                    //             show: true
                    //         },
                    //         dataView: {
                    //             show: true,
                    //             readOnly: false
                    //         },
                    //         restore: {
                    //             show: true
                    //         },
                    //         saveAsImage: {
                    //             show: true
                    //         }
                    //     }
                    // },
                    series: [{
                        name: 'Line 1',
                        type: 'pie',
                        clockWise: false,
                        center: ['30%', '50%'],
                        radius: ['80%', '86%'],
                        itemStyle: dataStyle,
                        hoverAnimation: true,
                        hoverOffset: 2,
                        data: [{
                            value: this.percent,
                            name: '个体上访'
                        }, {
                            name: '群体上访',
                            value: 100 - this.percent,
                            itemStyle: placeHolderStyle
                        }

                        ]
                    }, {
                        name: 'Line 2',
                        type: 'pie',
                        clockWise: false,
                        center: ['30%', '50%'],
                        radius: ['93%', '96%'],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        tooltip: {
                            show: false
                        },
                        data: [{
                            value: 100,
                            name: '',
                            itemStyle: {
                                emphasis: {
                                    color: '#000f24',
                                },
                                shadowColor: 'rgba(16, 255, 227, 0.75)',
                            }
                        }, {
                            value: 0,
                            name: 'invisible',
                            itemStyle: placeHolderStyle
                        }

                        ]
                    },


                    ]
                };
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            }
            , chart2() {
                var dom = document.getElementById(this.chart_name);
                this.myChart = this.$echarts.init(dom);
                var option = {
                    title: {
                        text: this.val + '%\n' + this.title,
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            color: '#FFF',
                            fontSize: '160%',
                            fontFamily: 'defaultFont'
                        }
                    },

                    color: ['#01c9fe'],
                    legend: {
                        show: false,
                        itemGap: 12,
                        data: ['01', '02']
                    },
                    series: [{
                        name: 'Line 1',
                        type: 'pie',
                        clockWise: true,
                        radius: ['70%', '90%'],
                        itemStyle: {
                            normal: {
                                label: {show: false},
                                labelLine: {show: false}
                            }
                        },
                        hoverAnimation: false,
                        data: [
                            {
                                value: this.percent,
                                name: '01',
                                itemStyle: {
                                    normal: {
                                        color: { // 完成的圆环的颜色
                                            colorStops: [{
                                                offset: 0,
                                                color: '#0a90ed' // 0% 处的颜色
                                            }, {
                                                offset: 0.5,
                                                color: '#72d3f7' // 100% 处的颜色
                                            }, {
                                                offset: 1,
                                                color: '#3093d9' // 100% 处的颜色
                                            }]
                                        },
                                        label: {show: false},
                                        labelLine: {show: false}
                                    }
                                }
                            },
                            {
                                name: '02',
                                value: 100 - this.percent
                            }]
                    }]
                }
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            },
            chart3() {
                var dom = document.getElementById(this.chart_name);
                this.myChart = this.$echarts.init(dom);
                var scaleData = this.scaleData
                var rich = {
                    white: {
                        color: '#FFF',
                        align: 'center',
                        padding: [3, 0],
                        fontSize: '160%',
                        lineHeight: '10',
                        fontFamily: 'defaultFont'
                    }
                }
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
                //var color=['#00cfff','#00cfff','#00cfff','#00cfff','#00cfff','#00cfff','#00cfff']
                for (var i = 0; i < scaleData.length; i++) {
                    data.push({
                        value: scaleData[i].value,
                        name: scaleData[i].name,
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
                    radius: ['42%', '48%'],//大小
                    hoverAnimation: false,
                    startAngle: 50,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#00fcff' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#053680' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                            label: {
                                show: true,
                                position: 'outside',
                                color: '#00e4ff',
                                fontSize: '160%',
                                lineHeight: '9',
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
                                length: 8,
                                length2: 9,
                                show: true,
                                lineStyle: {
                                    width: 1
                                },
                                color: '#fff'
                            }
                        }
                    },
                    data: data
                }];
                let option = {
                    title: {
                        text: this.titleText || '视频状态',
                        textStyle: {
                            color: '#fff',
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
                                image: require("../assets/operation/o_v_chartbg.png"),
                                width: 110,
                                height: 110
                            }
                        }
                    ]
                }
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            },
            chart4() {
                var dom = document.getElementById(this.chart_name);
                this.myChart = this.$echarts.init(dom);
                var scaleData = this.scaleData
                var rich = {
                    white: {
                        color: '#FFF',
                        align: 'center',
                        padding: [3, 0],
                        fontSize: '180%',
                        lineHeight: '10',
                        fontFamily: 'defaultFont'
                    }
                }
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
                //var color=['#00cfff','#00cfff','#00cfff','#00cfff','#00cfff','#00cfff','#00cfff']
                for (var i = 0; i < scaleData.length; i++) {
                    data.push({
                        value: scaleData[i].value,
                        name: scaleData[i].name,
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
                    radius: ['65%', '72%'],//大小
                    hoverAnimation: false,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#00fcff' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#053680' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                            label: {
                                show: true,
                                position: 'outside',
                                color: '#00e4ff',
                                fontSize: '180%',
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
                                length: 6,
                                length2: 16,
                                show: true,
                                lineStyle: {
                                    width: 1
                                },
                                color: '#fff'
                            }
                        }
                    },
                    data: data
                }];
                let option = {
                    title: {
                        text: this.titleText || '视频状态',
                        textStyle: {
                            color: '#fff',
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
                                image: require("../assets/operation/o_v_chartbg.png"),
                                width: 100,
                                height: 100
                            }
                        }
                    ]
                }
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            },
            init() {
                if (this.chart_type == "chart_noLine") {
                    this.chart2();
                } else if (this.chart_type == "chart_line") {
                    this.chart();
                } else if (this.chart_type == "chart_space") {
                    this.chart3();
                } else if (this.chart_type == "chart_people") {
                    this.chart4();
                } else if (this.chart_type == "chart_legend") {
                    this.chart_legend();
                } else {
                    this.chart();
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
            this.init();
        }
    }
</script>

<style scoped>
    .circle_chart {
        display: flex;
    }

    .circle_chart .box {
        height: 100%;
        flex: 1;
    }

    .circle_chart div.title {
        font-size: 1rem;
        color: #00f0fe;
        writing-mode: vertical-lr;
        text-align: center;
        vertical-align: middle;
        padding-left: 1%;
    }

    .chart {
        background: url("../assets/home/jk_chart_bg.png") no-repeat center;
    }
</style>
