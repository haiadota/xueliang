<template>
    <div id="p_rk_chart" class="main"></div>
</template>

<script>
    export default {
        name: "p_rk_chart",
        mounted() {
            this.p_rk_chart()
        },
        methods: {
            p_rk_chart() {
                var dom = document.getElementById('p_rk_chart');
                this.myChart = this.$echarts.init(dom);

                var placeHolderStyle = {
                    normal: {
                        color: 'rgba(44,59,70,0)',//未完成的圆环的颜色
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                };
                var option = {
                    title: {
                        text: '68%',
                        x: 'center',
                        y: '36%',
                        textStyle: {
                            fontWeight: 'normal',
                            color: "#00c4ff",
                            fontSize: '300%',
                            lineHeight: '2',
                            fontFamily: 'defaultFont'
                        },
                        subtext: '常驻人口占比',
                        subtextStyle: {
                            color: "#FFF",
                            fontSize: '160%',
                            fontFamily: 'defaultFont'
                        }
                    },
                    // backgroundColor: '#011128',
                    //color: ['#00deff', '#313443', '#FFF'],
                    series: [
                        {
                            name: 'Line 1',
                            type: 'pie',
                            clockWise: false,
                            radius: ['66%', '76%'],
                            hoverOffset: 4,
                            labelLine: {
                                show: false
                            },
                            itemStyle: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#1046f6' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#00fff6' // 100% 处的颜色
                                    }]
                                }
                            },
                            hoverAnimation: true,
                            data: [{
                                value: 68,
                                name: ''
                            }, {
                                name: '',
                                value: 100 - 68,
                                itemStyle: placeHolderStyle
                            }]
                        }, {
                            name: 'Line 2',
                            type: 'pie',
                            animation: false,
                            clockWise: false,
                            radius: ['80%', '82%'],
                            itemStyle: {},
                            hoverAnimation: false,
                            labelLine: {
                                show: false
                            },
                            tooltip: {
                                show: false
                            },
                            data: [
                                {
                                    value: 100,
                                    name: '',
                                    itemStyle: {
                                        color: '#41b8d3'
                                    }
                                }, {
                                    value: 0,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        }]
                };
                if (option && typeof option === "object") {
                    this.myChart.setOption(option, true);
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