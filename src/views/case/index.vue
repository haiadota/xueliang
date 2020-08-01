<template>
    <div class="container">
        <div class="left">
            <item title="今日案件总量" place="left_first itemDefault">
                <div class="roll_box">
                    <div class="monthCount">
                        <mothCount v-for="(item,index) in mothCountList" :key="index+'1'" :month="index+1+'月'"
                                   :val="item"></mothCount>
                        <mothCount v-for="(item,index) in mothCountList" :key="index+'2'" :month="index+1+'月'"
                                   :val="item"></mothCount>
                    </div>
                </div>
                <ajtotal_chart chart_name="c_jraj" title="今日案件" :chart_style="firstStyle"></ajtotal_chart>
            </item>
            <item title="新区案件总量占比" place="left_second itemDefault">
                <casearealabel></casearealabel>
            </item>
            <item title="案件总览占比" place="left_third itemDefault">
                <div v-for="(item,index) in secondArr" class="right_bottom">
                    <casecirclechart :chart_name="item.chart_name" :chart_style="thirdStyle" chart_type="chart_noLine"
                                     :title="item.title" val="80" percent="80"></casecirclechart>
                </div>
            </item>
        </div>
        <div class="center">
            <div class="border" ref="earth">
                <div class="top_group">
                    <div class="datepicker_wrap">
                        <datepicker format="yyyy MMM dd" calendar-class="calendar_size" input-class="input_size"
                                    v-model="date" :language="zh"></datepicker>
                    </div>
                    <select class="sel_img" @change="handleMpaType($event)">
                        <option value="0">请选择</option>
                        <option value="1">刑事案件热力图</option>
                        <option value="2">治安案件灯光图</option>
                        <option value="3">新区案件高度图</option>
                    </select>
                </div>
                <div class="tools">
                    <div v-if="ctrlPanel_show" class="button_group">
                        <ul class="ctrlPanel">
                            <li @click="show3DInfo('xsaj')">刑事案件</li>
                            <li @click="show3DInfo('qtaj')">群体案件</li>
                            <li @click="show3DInfo('zaaj')">治安案件</li>
                            <li @click="show3DInfo('qzqz')">群众求助</li>
                            <li @click="show3DInfo('zrzh')">自然灾害</li>
                            <li @click="show3DInfo('zazh')">治安灾害</li>
                        </ul>
                    </div>
                    <button @click="ctrlPanel_show=!ctrlPanel_show">案件类别</button>
                </div>
            </div>
        </div>
        <div class="right">
            <item title="破案率统计" place="right_first itemDefault">
                <caseprocess></caseprocess>
            </item>
            <item title="案件类别" place="right_second itemDefault">
                <casetypeprocess></casetypeprocess>
            </item>
            <item title="环比案件发生率" place="right_third itemDefault">
                <div v-for="(item,index) in thirdArr" class="right_bottom">
                    <case_bar_chart :chart_name="item.chart_name" :chart_style="thirdStyle" :title="item.title" val="80"
                                    percent="80">
                    </case_bar_chart>
                </div>
            </item>
        </div>
    </div>
</template>

<script>
    import item from "../../components/item"
    import mothCount from "../../components/case/monthCount"
    import ajtotal_chart from "../../components/case/ajtotal_chart"
    import caseprocess from "../../components/case/case_process"
    import casetypeprocess from "../../components/case/casetype_process"
    import casearealabel from "../../components/case/casearea_label"
    import casecirclechart from "../../components/case/case_circle_chart"
    import case_bar_chart from "../../components/case/case_bar_chart"
    import Datepicker from 'vuejs-datepicker'
    import {zh} from 'vuejs-datepicker/dist/locale'

    export default {
        name: "operation",
        components: {
            item,
            mothCount,
            ajtotal_chart,
            caseprocess,
            casetypeprocess,
            casearealabel,
            casecirclechart,
            case_bar_chart,
            Datepicker
        },
        data() {
            return {
                secondArr: [
                    {title: '长德区', chart_name: 'c_cd'},
                    {title: '空港区', chart_name: 'c_kg'},
                    {title: '高新区', chart_name: 'c_gx'},
                    {title: '北湖区', chart_name: 'c_bh'}
                ],
                thirdArr: [
                    {title: '长德区', chart_name: 'cb_cd'},
                    {title: '空港区', chart_name: 'cb_kg'},
                    {title: '高新区', chart_name: 'cb_gx'},
                    {title: '北湖区', chart_name: 'cb_bh'}
                ],
                firstStyle: {width: '10rem', height: '10rem'},
                thirdStyle: {height: '100%', width: '95%'},
                mothCountList: ['15%', '10%', '10%', '30%', '15%', '3%', '16%', '11%', '31%', '19%', '8%', '10%'],
                date: new Date(),
                ctrlPanel_show: false,
                zh: zh
            }
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
                            window.showGdt("anjian")
                        break
                }
            },
            show3DInfo(value) {
                window.showAnjian(value)
            }
        }
    }
</script>

<style scoped>
    .left {
        width: 34rem;
        border: 0.02rem #00fcff dotted;
        position: relative;
    }

    .right {
        width: 34rem;
        border: 0.02rem #00fcff dotted;
    }

    .roll_box {
        width: 100%;
        overflow: hidden;
    }

    .monthCount {
        display: inline-flex;
        animation: slide-animation 50s linear infinite;
    }

    .monthCount:hover {
        animation-play-state: paused;
    }

    @keyframes slide-animation {
        to {
            transform: translateX(-50%);
        }
    }

    .center .border .tools {
        z-index: 9;
        position: absolute;
        bottom: 2%;
        right: .2rem;
        display: flex;
        justify-content: flex-end;
        padding-right: 1rem;
    }

    .center .border .tools button {
        border: 0.04rem solid #606c6d;
        width: 8rem;
        height: 2.5rem;
        background: none;
        color: #23fafb;
        font-size: 1.25rem;
        outline: none;
        cursor: pointer;
    }

    .center .border .tools button:hover {
        border: none;
        background: url("../../assets/operation/bg1.gif") no-repeat;
        background-size: cover;
    }

    .tools .button_group {
        padding: 0.5rem;
        background-color: rgba(3, 14, 40, 0.8);
        position: absolute;
        bottom: 2.53rem;
        right: 2rem;
    }

    .tools .button_group .ctrlPanel {
        list-style: none;
        font-size: 1rem;
        color: white;
    }

    .datepicker_wrap {
        float: left;
        clear: both;
        padding-right: 1rem;
    }

    .left_first {
        height: 24%;
    }

    .left_second {
        height: 14%;
    }
    .left_third {
        height: 62%;
    }
    .left_bottom {
        height: 49rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .right_first, .right_second {
        height: 20%;
    }

    .right_third {
        height: 60%;
    }

    .right_bottom {
        height: calc(25% - .25rem);
    }
</style>
