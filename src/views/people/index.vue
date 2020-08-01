<template>
    <div class="container">
        <div class="left">
            <item title="新区人口统计" place="top_item">
                <div class="box">
                    <div class="item" v-for="(item,index) in xqrkArr" :key="index">
                        <totalChart :chart_name="item.chart_name" :title="item.title" :chart_style="xqrkStyle">
                        </totalChart>
                    </div>
                </div>
            </item>
            <item title="常驻人口统计" place="mid_item">
                <div class="box">
                    <alarm :dataSource="dataSource" valColor="#01daec"></alarm>
                    <!--<div class="top_part">-->
                    <!--</div>-->
                    <!--<div class="bottom_part">-->
                    <!--<PRkChart></PRkChart>-->
                    <!--</div>-->
                </div>
            </item>
            <item title="数据占比统计" place="bottom_item">
                <div class="box">
                    <circle_chart chart_name="cdSjzb" titleText="长德区" ref="cdSjzb" :chart_style="sjzbStyle"
                                  chart_type="chart_people">
                    </circle_chart>
                    <circle_chart chart_name="kgSjzb" titleText="空港区" ref="kgSjzb" :chart_style="sjzbStyle"
                                  chart_type="chart_people">
                    </circle_chart>
                    <circle_chart chart_name="hxSjzb" titleText="高新区" ref="hxSjzb" :chart_style="sjzbStyle"
                                  chart_type="chart_people">
                    </circle_chart>
                    <circle_chart chart_name="bhSjzb" titleText="北湖区" ref="bhSjzb" :chart_style="sjzbStyle"
                                  chart_type="chart_people">
                    </circle_chart>
                </div>
            </item>
        </div>
        <div class="center">
            <div class="border" ref="earth">
                <div class="top_group">
                    <select class="sel_img" @change="">
                        <option value="">分类</option>
                        <option value="">常驻人口</option>
                        <option value="">暂住人口</option>
                        <option value="">涉稳人口</option>
                    </select>
                    <select class="sel_img" @change="handleMpaType($event)">
                        <option value="0">请选择</option>
                        <option value="1">常住人口热力图</option>
                        <option value="2">暂住人口灯光图</option>
                        <option value="3">新区人口高度图</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="right">
            <item title="暂住人口统计" class="first_part">
                <div class="box">
                    <circle_chart v-for="(e,i) in zzrkArr" :key="i" :ref="e.ref" :chart_name="e.chart_name"
                                  chart_type="chart_line" :chart_style="zzrkStyle" :title="e.title">
                    </circle_chart>
                </div>
            </item>
            <item title="暂住人口年龄分布/流动人口统计" class="second_part">
                <div class="box">
                    <div class="item">
                        <div class="theme">暂住人口年龄分类</div>
                        <div class="chart">
                            <PNlChart></PNlChart>
                        </div>
                    </div>
                    <div class="item">
                        <div class="theme">流动人口外来省份</div>
                        <div class="chart">
                            <PLdrkChart></PLdrkChart>
                        </div>
                    </div>
                </div>
            </item>
            <item title="涉稳人口统计" class="third_part">
                <div class="box">
                    <div class="top_part">
                        <PFbChart></PFbChart>
                    </div>
                    <!--<div class="top_part">-->
                    <!--<PZtChart></PZtChart>-->
                    <!--</div>-->
                    <!--<div class="bottom_part">-->
                    <!--<circle_chart ref="p_zz_ref" chart_name="p_zz_chart" chart_type="chart_legend"-->
                    <!--chart_style="height:100%;width:100%" title="" val="30" percent="80">-->
                    <!--</circle_chart>-->
                    <!--</div>-->
                </div>
            </item>
        </div>
    </div>
</template>

<script>
    import item from "../../components/item"
    import totalChart from "../../components/people/total_chart"
    import alarm from "../../components/operation/alarm"
    import circle_chart from "../../components/circle_chart"
    import PRkChart from '@/components/people/p_rk_chart'
    import PNlChart from '@/components/people/p_nl_chart'
    import PLdrkChart from '@/components/people/p_ldrkChart'
    import PFbChart from '@/components/people/p_fb_chart'
    import PZtChart from '@/components/people/p_zt_chart'

    export default {
        name: "people",
        components: {item, totalChart, alarm, circle_chart, PRkChart, PNlChart, PLdrkChart, PFbChart, PZtChart},
        data() {
            return {
                xqrkStyle: {width: '6.5rem', height: '7.5rem'},
                xqrkArr: [
                    {title: '长德区', chart_name: 'p_changde'},
                    {title: '空港区', chart_name: 'p_konggang'},
                    {title: '高新区', chart_name: 'p_gaoxin'},
                    {title: '北湖区', chart_name: 'p_beihu'}
                ],
                sjzbStyle: {width: '100%', height: '100%'},
                zzrkStyle: {width: '50%', height: '45%'},
                zzrkArr: [
                    {ref: 'p_changde_ref', title: '长德区', chart_name: 'p_changde_chart', val: '300', percent: '30'},
                    {ref: 'p_konggang_ref', title: '空港区', chart_name: 'p_konggang_chart', val: '1200', percent: '60'},
                    {ref: 'p_gaoxin_ref', title: '高新区', chart_name: 'p_gaoxin_chart', val: '3200', percent: '80'},
                    {ref: 'p_beihu_ref', title: '北湖区', chart_name: 'p_beihu_chart', val: '320', percent: '10'}
                ],
                dataSource: [
                    {title: "高新区", value: '132222〔人〕', count: 3},
                    {title: "北湖区", value: '302323〔人〕', count: 3},
                    {title: "空港区", value: '170000〔人〕', count: 5},
                    {title: "长德区", value: '112312〔人〕', count: 2}
                ]
            }
        },
        mounted() {
        },
        methods: {
            handleMpaType(e) {
                switch (e.target.value) {
                    case '0':
                        break
                    case '1':
                        if (window.showRlt)
                            window.showRlt()
                        break
                    case '2':
                        if (window.showDgt)
                            window.showDgt()
                        break
                    case '3':
                        if (window.showGdt)
                            window.showGdt("renkou")
                        break
                }
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "迷你简细圆.TTF";
        src: url("../../assets/迷你简细圆.TTF");
    }

    * {
        font-family: "迷你简细圆.TTF";
    }

    .left {
        width: 34rem;
        display: flex;
        flex-direction: column;
    }

    .right {
        width: 34rem;
    }

    .left .top_item .box {
        width: 100%;
        height: calc(100% - 2rem);
        box-sizing: border-box;
        overflow: hidden;
        padding-bottom: 2rem;
    }

    .left .top_item .box .item {
        width: 50%;
        height: 50%;
        float: left;
    }

    .left .mid_item {
        width: 100%;
        height: 16.5%;
    }

    .left .mid_item .box {
        width: 90%;
        margin: 0 auto;
        height: calc(100% - 2rem);
        overflow: hidden;
    }

    .mid_item .box .top_part {
        width: 95%;
        height: 50%;
        padding-left: 3%;
    }

    .mid_item .box .bottom_part {
        width: 100%;
        height: 50%;
    }

    .left .bottom_item {
        width: 100%;
        flex: 1;
    }

    .left .bottom_item .box {
        width: 100%;
        height: calc(100% - 2rem);
        display: flex;
        flex-direction: column;
    }

    .right .first_part {
        height: 25%;
    }

    .right .first_part .box {
        height: calc(100% - 2rem);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .right .second_part {
        height: 50%;
    }

    .right .second_part .box {
        height: calc(100% - 1.7rem);
    }

    .right .second_part .box .item {
        width: 100%;
        height: 50%;
        display: flex;
    }

    .right .second_part .box .item .theme {
        writing-mode: vertical-lr;
        text-align: center;
        font-size: 1.14rem;
        color: #fff;
        flex: 1;
    }

    .right .second_part .box .item .chart {
        width: 94%;
        height: 100%;
    }

    .right .third_part {
        height: 25%;
    }

    .right .third_part .box {
        height: calc(100% - 1.7rem);
    }

    .right .third_part .box .top_part {
        width: 100%;
        height: 100%;
    }

    .right .third_part .box .bottom_part {
        height: 22%;
        display: flex;
    }
</style>
