<template>
    <div class="total_chart">
        <div class="borderBg" :style="chart_style">
            <div class="chart" :id="chart_name"></div>
        </div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "total_chart",
        props:["chart_name",'chart_style','title'],
        data(){
            return{

            }
        },
        methods:{
            init(){
                let dom = document.getElementById(this.chart_name);
                this.myChart = echarts.init(dom);
                let option = {
                    title: {
                        text: '80%',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            color: '#FFF',
                            fontSize: '200%',
                            fontFamily:'defaultFont',
                            textShadowColor:'rgba(255,255,255)',
                            textShadowBlur:5,
                            textBorderWidth:10
                        }
                    },
                    color: ['rgba(176, 212, 251, 0)'],
                    legend: {
                        show: false,
                        itemGap: 12,
                        data: ['01', '02']
                    },

                    series: [{
                        name: 'Line 1',
                        type: 'pie',
                        clockWise: true,
                        radius: ['74%', '80%'],
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
                            name: '02',
                            value: 20
                        },{
                            value: 80,
                            name: '01',
                            itemStyle: {
                                normal: {
                                    color: { // 完成的圆环的颜色
                                        colorStops: [{
                                            offset: 0,
                                            color: 'rgba(22,252,255,0.3)' // 0% 处的颜色
                                        },{
                                            offset: 0.3,
                                            color: 'rgba(22,252,255,1)' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: 'rgba(22,252,255,0.1)' // 100% 处的颜色
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
                        }]
                    }]
                }
                if (option && typeof option === "object") {
                    this.myChart .setOption(option, true);
                }
            }
        },
        mounted(){
            this.init();
        }
    }
</script>

<style scoped>
    .total_chart{
        flex:1;
    }
    .borderBg{
        margin: 0 auto;
        background:url("../../assets/people/totalbg.png") center no-repeat;
        background-size: 115% 115%;
    }
    .chart{
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .title{
        background:url("../../assets/people/total_titlebg.png") bottom no-repeat;
        background-size: 50% 60%;
        padding:.1rem 1rem;
        font-size:1rem;
        color:#ffec45;
        text-shadow:0 0 .32rem #fe8828, -0 -0 .32rem  #fe8828;
        text-align: center;
        font-weight: bold;
        animation: textLight 2s linear infinite alternate;
    }
    @keyframes textLight {
        from{
            text-shadow:0 0 .32rem #fe8828, -0 -0 .32rem #fe8828;
        }
        to{
            text-shadow:0 0 0.02rem #fe8828,
            -0 -0 0.02rem #fe8828;
        }
    }
</style>
