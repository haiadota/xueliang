<template>
    <transition name="show">
    <div class="main" style="flex:1" v-if="show">
        <div style="padding:20px;">
            <table border='1' align="center">
                <tr>
                    <td style="width:2000px;height:2000px" rowspan="2" colspan='3'>
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">
                    </td>
                    <td style="width:1000px;height:1000px">
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">
                    </td>
                    <td style="width:1000px;height:1000px">
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">
                    </td>
                </tr>
                <tr>
                    <td style="width:1000px;height:1000px">
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">
                    </td>
                    <td style="width:1000px;height:1000px">
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">
                    </td>
                </tr>
                <tr>
                    <td style="width:1000px;height:1000px">
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">
                    </td>
                    <td style="width:1000px;height:1000px">
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">

                    </td>
                    <td style="width:1000px;height:1000px">
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">

                    </td>
                    <td style="width:1000px;height:1000px">
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">

                    </td>
                    <td style="width:1000px;height:1000px">
                        <img width="100%" height="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555489448871&di=454aa504244ec71641fd0b22531974d0&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F1005060000001ctwg9D0F.jpg">

                    </td>
                </tr>
            </table>
        </div>
        <div style="height:1536px;display:flex;">
            <div style="flex:1;padding-right:50px;">
                <item title="平台统计分类">
                    <div style="display:flex;padding-top:10%;padding-left:2%;">
                        <perchart chart_name="sbzt_chart1" chart_color="#85c65f" chart_type="chart_2" chart_style="width:568px;height:568px;" title="北湖" val="320" percent="10"></perchart>
                        <perchart chart_name="sbzt_chart2" chart_color="#e1a832" chart_type="chart_2" chart_style="width:568px;height:568px;" title="北湖" val="320" percent="10"></perchart>
                        <perchart chart_name="sbzt_chart3" chart_color="#046ad2" chart_type="chart_2" chart_style="width:568px;height:568px;" title="北湖" val="320" percent="10"></perchart>
                        <perchart chart_name="sbzt_chart4" chart_color="#046ad2" chart_type="chart_2" chart_style="width:568px;height:568px;" title="北湖" val="320" percent="10"></perchart>
                    </div>
                </item>
            </div>
            <div style="flex:1;padding-left:50px;">
                <item title="资产设备统计">
                    <div id="vdzc_chart" style="width:100%;height:1100px;"></div>
                </item>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    import item from "../../components/item"
    import perchart from "../../components/operation/perchart"
    import echarts from 'echarts'
    export default {
        name: "videoRoom",
        components:{item,perchart},
        data(){
            return {
                first:0
            }
        },
        props:{
            show:Boolean
        },
        methods:{
            zc_chart(){//资产
                setTimeout(function() {
                    let dom = document.getElementById("vdzc_chart");
                    let myChart = echarts.init(dom);
                    let option = {
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'item',
                            textStyle: {
                                fontSize: 100
                            },
                            backgroundColor: "rgba(18,114,135,0.6)"
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },

                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            axisLabel: {
                                color: "#fff",
                                fontSize: 84,
                                margin: 40
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#115372",
                                    width: 10
                                }

                            },
                            splitLine: {
                                lineStyle: {
                                    width: 5
                                }
                            },
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        },
                        yAxis: {
                            axisLabel: {
                                color: "#fff",
                                fontSize: 84
                            },
                            axisLine: {
                                lineStyle: {
                                    //color:"#115372",
                                    width: 5
                                }

                            },
                            type: 'value'
                        },

                        series: [
                            {
                                name: '视频设备',
                                type: 'line',
                                stack: '总量',
                                lineStyle: {
                                    width: 5
                                },
                                symbol: 'roundRect',     //设定为实心点
                                symbolSize: [30, 50],   //设定实心点的大小
                                data: [120, 132, 101, 134, 90, 230, 210]

                            },
                            {
                                name: '网络设备',
                                type: 'line',
                                stack: '总量',
                                lineStyle: {
                                    width: 5
                                },
                                symbol: 'roundRect',     //设定为实心点
                                symbolSize: [30, 50],   //设定实心点的大小
                                data: [220, 182, 191, 234, 290, 330, 310]
                            },
                            {
                                name: 'WIFI设备',
                                type: 'line',
                                stack: '总量',
                                lineStyle: {
                                    width: 5
                                },
                                symbol: 'roundRect',     //设定为实心点
                                symbolSize: [30, 50],   //设定实心点的大小
                                data: [320, 332, 301, 334, 390, 330, 320]
                            }
                        ]
                    };
                    if (option && typeof option === "object") {
                        myChart.setOption(option, true);
                    }
                },300);
            }
        },
        mounted(){
            this.zc_chart();
            this.first=1;
        },
        watch: {
            'show':function(newVal,oldVal){
               if(newVal==true&&this.first==1){
                   this.zc_chart();
               }
            }
        }
    }
</script>

<style scoped>
    div.main{
        flex:1;
        background:url("../../assets/operation/tmroombg.png") no-repeat center;
        padding:103px 330px;

    }
    .show-enter-active {
        animation: bounce-in .8s;
    }
    .show-leave-active {
        animation: bounce-in .8s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            transform: scale(0.5);
            opacity:0.5;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>
