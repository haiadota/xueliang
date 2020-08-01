<template>
    <div class="circle_chart">
        <div :id="chart_name" :class="{chart:chart_type=='chart_noline'}" :style="chart_style"></div>
        <div class="title" v-if="chart_type=='chart_line'&&title!=''">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "circle_chart1",
        data() {
            return {
                myChart:null,
                scaleData: [
                    {'name': '图像模糊', 'value': 10},
                    {'name': '信号丢失', 'value': 10},
                    {'name': '视频冻结', 'value': 10},
                    {'name': '画面异常', 'value': 10},
                    {'name': '视频卡顿', 'value': 10},
                ]
            }
        },
        props: ["chart_name", "title", "val", "percent", "chart_type", "chart_style","titleText"],
        methods: {
            chart() {
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
                        text: this.val,
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            color: "#FFF",
                            fontSize: 78.33,
                            fontFamily: 'defaultFont'
                        }
                    },
                    // backgroundColor: '#011128',
                    color: ['#00deff', '#313443', '#FFF'],
                    tooltip: {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    // legend: {
                    //     show: true,
                    //     bottom:0,
                    //     itemGap: 12,
                    //     data: ['01', '02']
                    // },
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
                        radius: ['85%', '90%'],
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
                    }, {
                        name: 'Line 2',
                        type: 'pie',
                        animation: false,
                        clockWise: false,
                        radius: ['99%', '100%'],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        tooltip: {
                            show: false
                        },
                        data: [{
                            value: 100,
                            name: '02',
                            itemStyle: {
                                emphasis: {
                                    color: '#000f24'
                                }
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
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            color: "#FFF",
                            fontSize: 165.41,
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
                        bottom: 0,
                        right: '5%',
                        orient: 'vertical',
                        itemGap: 20,
                        itemWidth: 150,
                        itemHeight: 30,
                        data: ['个体上方', '群体上访'],
                        textStyle: {
                            fontSize: 80,
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
                        radius: ['63%', '65%'],
                        itemStyle: dataStyle,
                        hoverAnimation: true,

                        data: [{
                            value: this.percent,
                            name: '个体上方'
                        }, {
                            name: '群体上访',
                            value: 100 - this.percent,
                            itemStyle: placeHolderStyle
                        }

                        ]
                    }, {
                        name: 'Line 2',
                        type: 'pie',
                        animation: false,
                        clockWise: false,
                        radius: ['74%', '75%'],
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
                            fontSize: '100',
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
                    radius: ['60%', '66%'],//大小
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
                                length2: 12,
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
                        text: this.titleText||'视频状态',
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
                                width: 120,
                                height: 120
                            }
                        }
                    ]
                }
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
                }
            }, chart3_1() {
                var dom = document.getElementById(this.chart_name);
                this.myChart = this.$echarts.init(dom);
                var scaleData = this.scaleData
                var rich = {
                    white: {
                        color: '#FFF',
                        align: 'center',
                        padding: [3, 0],
                        fontSize: '150%',
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
                //var color=['#00cfff','#00cfff','#00cfff','#00cfff','#00cfff','#00cfff','#00cfff']
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
                    radius: ['46%', '50%'],//大小
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
                                fontSize: '150%', //字的颜色
                                lineHeight: '11',
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
                                        // return '';
                                    }
                                },
                                rich: rich
                            },
                            labelLine: {
                                length: 9,
                                length2: 8,
                                show: true,
                                lineStyle: {
                                    width: `1`
                                },
                                color: '#fff'
                            }
                        }
                    },
                    data: data
                }];
                let option = {
                    title: {
                        text: this.titleText,
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
                    // graphic: [
                    //     {
                    //         type: 'image',
                    //         id: 'logo',
                    //         left: 'center',
                    //         bottom: 'center',
                    //         z: 1000,
                    //         bounding: 'raw',
                    //         style: {
                    //             image: require("../assets/operation/o_v_chartbg.png"),
                    //             width: 879,
                    //             height:879
                    //         }
                    //     }
                    // ]
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
                } else if (this.chart_type == "chart_space_nobg") {
                    this.chart3_1();
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
        height: 100%;
        display: flex;
    }

    .circle_chart div:nth-child(1) {
        flex: 2
    }

    .circle_chart div:nth-child(2) {
        flex: 1
    }

    .circle_chart .title {
        font-size: 1rem;
        color: #00f0fe;
        writing-mode: vertical-lr;
        text-align: center;
        vertical-align: middle;
    }

    .chart {
        background: url("../assets/home/jk_chart_bg.png") no-repeat center;
    }
</style>
