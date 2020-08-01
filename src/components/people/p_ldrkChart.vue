<template>
    <div id="p_ldrkChart" class="main"></div>
</template>

<script>
    export default {
        name: "p_ldrkChart",
        mounted() {
            this.ldrk_chart()
        },
        methods: {
            ldrk_chart() {
                let dom = document.getElementById('p_ldrkChart');
                var myChart = this.$echarts.init(dom);
                let colorList = ['#225be6', '#0088dd', '#00abd8', '#00ccd9', '#75f7c3'];
                var option = {
                    // title: {
                    //     text: '金字塔',
                    //     subtext: '纯属虚构'
                    // },
                    // tooltip: {
                    //     show:false,
                    //     trigger: 'item',
                    //     formatter: "{a} <br/>{b} : {c}%"
                    // },
                    // toolbox: {
                    //     feature: {
                    //         dataView: {readOnly: false},
                    //         restore: {},
                    //         saveAsImage: {}
                    //     }
                    // },
                    legend: {
                        left: 'center',
                        right: "center",
                        bottom: 0,
                        textStyle: {
                            fontSize: '170%',
                            color: "#00fdff"
                        },
                        itemWidth: 6,
                        itemHeight: 2,
                        itemGap: 1,
                        data: ['top1', 'top2', 'top3', 'top4', 'top5']
                    },
                    calculable: true,
                    color: colorList,
                    series: [
                        {
                            name: '漏斗图',
                            type: 'funnel',
                            left: '6%',
                            right: '10%',
                            top: '2%',
                            bottom: '18%',
                            minSize: '0%',
                            maxSize: '90%',
                            sort: 'ascending',
                            gap: 0,
                            label: {
                                show: true,
                                position: 'inside',
                                textStyle: {
                                    fontSize: '180%'
                                },
                                formatter: '{c}%'
                            },
                            labelLine: {
                                length: 10,
                                lineStyle: {
                                    width: 2,
                                    type: 'solid'
                                }
                            },
                            itemStyle: {
                                borderColor: '#fff',
                                borderWidth: 0
                            },
                            // emphasis: {
                            //     label: {
                            //         fontSize: 20
                            //     }
                            // },
                            markLine: {
                                symbol: 'none',
                                lineStyle: {type: 'solid', width: 2},
                                label: {
                                    textStyle: {
                                        fontSize: '160%',
                                        fontFamily: 'defaultFont',
                                        color: "#FFF"
                                    }
                                },
                                data: [
                                    // [{x:'45%',y:'8%'},{x:'85%',y:'8%',value:'安徽省',lineStyle:{color:colorList[0]}}],
                                    // [{x:'45%',y:'26%'},{x:'85%',y:'26%',value:'安徽省',lineStyle:{color:colorList[1]}}],
                                    // [{x:'45%',y:'45%'},{x:'85%',y:'45%',value:'安徽省',lineStyle:{color:colorList[2]}}],
                                    // [{x:'45%',y:'65%'},{x:'85%',y:'65%',value:'安徽省',lineStyle:{color:colorList[3]}}],
                                    // [{x:'45%',y:'80%'},{x:'85%',y:'80%',value:'安徽省',lineStyle:{color:colorList[4]}}],
                                ]
                            },
                            data: [
                                {value: 11, name: 'top1'},
                                {value: 22, name: 'top2'},
                                {value: 33, name: 'top3'},
                                {value: 44, name: 'top4'},
                                {value: 55, name: 'top5'}
                            ]
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                    myChart.on('mouseover', function (params) {
                        if (params.componentType == "series") {
                            var ss = [
                                [{x: '45%', y: '8%'}, {
                                    x: '85%',
                                    y: '8%',
                                    value: '安徽省',
                                    lineStyle: {color: colorList[0]}
                                }],
                                [{x: '45%', y: '26%'}, {
                                    x: '85%',
                                    y: '26%',
                                    value: '四川省',
                                    lineStyle: {color: colorList[1]}
                                }],
                                [{x: '45%', y: '45%'}, {
                                    x: '85%',
                                    y: '45%',
                                    value: '吉林省',
                                    lineStyle: {color: colorList[2]}
                                }],
                                [{x: '45%', y: '65%'}, {
                                    x: '85%',
                                    y: '65%',
                                    value: '福建省',
                                    lineStyle: {color: colorList[3]}
                                }],
                                [{x: '45%', y: '80%'}, {
                                    x: '85%',
                                    y: '80%',
                                    value: '辽宁省',
                                    lineStyle: {color: colorList[4]}
                                }]];
                            option.series[0].markLine.data.shift();
                            option.series[0].markLine.data.push(ss[params.dataIndex]);
                            myChart.setOption(option);
                        }
                    });
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