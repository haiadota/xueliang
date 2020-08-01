<template>
    <div class="container">
        <div class="left">
            <item title="视频设备运行状态统计" place="itemDefault">
                <div class="yw_charts">
                    <circle_chart chart_name="yw_lxwz_chart" :chart_style="first_style" chart_type="chart_noLine"
                                  title="录像完整率" ref="lxwzChart">
                    </circle_chart>
                    <circle_chart chart_name="yw_txwh_chart" :chart_style="first_style" chart_type="chart_noLine"
                                  title="图像完好率" ref="txwhChart">
                    </circle_chart>
                    <circle_chart chart_name="yw_spzx_chart" :chart_style="first_style" chart_type="chart_noLine"
                                  title="视频在线率" ref="spzxChart">
                    </circle_chart>
                </div>
            </item>
            <item title="离线设备统计" place="itemDefault">
                <offdevices></offdevices>
            </item>
            <item title="视频质量分析" place="itemDefault">
                <div class="video_zl">
                    <circle_chart1 chart_name="lxwzl_chart" :chart_style="second_style" chart_type="chart_space"
                                   title="录像完整率">
                    </circle_chart1>
                    <div class="video_info">
                        <div>
                            <div class="v_top">视频遮挡</div>
                            <div class="v_val">30%</div>
                        </div>
                        <div>
                            <div class="v_top">画面异常</div>
                            <div class="v_val">20%</div>
                        </div>
                    </div>
                </div>
            </item>
            <item title="工单统计" place="itemDefault left_bottom">
                <div class="box">
                    <div class="form_chart">
                        <div id="form_img1"></div>
                        <div id="form_img2"></div>
                        <div id="form_img3"></div>
                        <div id="form_img4"></div>
                        <div class="form_total">1111<span class="color">起</span></div>
                        <div class="form_top form_top4">处理完毕</div>
                        <div class="form_top form_top3">挂起</div>
                        <div class="form_top form_top2">处理中</div>
                        <div class="form_top form_top1">已受理</div>
                    </div>
                    <div class="form_data parent-dom">
                        <vuescroll :ops="ops">
                            <table cellpadding="0" cellspacing="0">
                                <thead>
                                <tr>
                                    <th>工单号</th>
                                    <th>标题</th>
                                    <th>状态</th>
                                    <th>设备类型</th>
                                    <th>详细信息</th>
                                </tr>
                                </thead>
                                <tbody class="child-dom">
                                <tr v-for="(item,index) in 6" :key="index">
                                    <td>16</td>
                                    <td>16</td>
                                    <td>已受理</td>
                                    <td>摄像头</td>
                                    <td>图像不清晰</td>
                                </tr>
                                </tbody>
                            </table>
                        </vuescroll>
                    </div>
                </div>
            </item>
        </div>
        <div class="center">
            <div class="border" ref="earth">
                <iframe :src="abbrUrl" class="box" v-show="abbrRoom" frameborder="0"></iframe>
                <div class="close" v-show="abbrRoom"><span class="btn" @click="abbrRoom = false">返回</span></div>
                <div class="tools">
                    <ul v-if="ctrlPanel_show" class="ctrlPanel">
                        <li @click="show3DInfo" name="gjxx">告警信息</li>
                        <li @click="show3DInfo" name="gdxx">工单信息</li>
                        <li @click="show3DInfo" name="rlsb">枪机摄像机</li>
                        <li @click="show3DInfo" name="kksxt">球机摄像机</li>
                        <li @click="show3DInfo" name="gdsxt">高点摄像机</li>
                        <li @click="show3DInfo" name="wftz">WIFI探针</li>
                        <li @click="show3DInfo" name="dzwl">电子围栏</li>
                    </ul>
                    <div class="btn_groups">
                        <div class="btn" @click="showMR">3D机房</div>
                        <button @click="showCtrlPanel">控制面板▲</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <!--<videoRoom :show="video_show"></videoRoom>-->
            <item title="告警统计" place="itemDefault right_first">
                <div class="top">实时告警总数:236885[件]</div>
                <alarm></alarm>
                <div class="form_data parent-dom">
                    <vuescroll :ops="ops">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>设备类型</th>
                                <th>设备ID</th>
                                <th>告警级别</th>
                                <th>告警信息</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>001</td>
                                <td>16</td>
                                <td>中级</td>
                                <td>正常</td>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>16</td>
                                <td>中级</td>
                                <td>异常11</td>
                            </tr>
                            <tr v-for="(item,index) in 9" :key="index">
                                <td>001</td>
                                <td>16</td>
                                <td>中级</td>
                                <td>摄像头</td>
                            </tr>
                            </tbody>
                        </table>
                    </vuescroll>
                </div>
            </item>
            <!--<item title="平台设备监控状态" place="itemDefault">-->
            <!--<div id="sbzt_scroll">-->
            <!--<perchart v-for="(item,index) in thirdArr" :key="index" :chart_name="item.chart_name"-->
            <!--:chart_color="item.chart_color" chart_type="chart_1" :chart_style="third_style"-->
            <!--:title="item.title" :val="item.val" :percent="item.percent">-->
            <!--</perchart>-->
            <!--</div>-->
            <!--</item>-->
            <item title="监控运维" place="itemDefault">
                <div class="jkyw">
                    <rate></rate>
                    <perchart chart_name="jkyw_chart" chart_type="chart" :chart_style="fourth_style" title="北湖"
                              val="320" percent="10">
                    </perchart>
                </div>
            </item>
            <item title="资产设备统计" place="itemDefault right_third">
                <div class="zc_chart">
                    <ZcChart></ZcChart>
                </div>
            </item>
        </div>
    </div>
</template>

<script>
    import item from "../../components/item";
    import circle_chart from "../../components/circle_chart";
    import circle_chart1 from "../../components/circle_chart1";
    import offdevices from "../../components/operation/offdevices";
    import alarm from "../../components/operation/alarm";
    import rate from "../../components/operation/rate";
    import perchart from "../../components/operation/perchart";
    import threeDMRoom from "../../components/operation/TdMachineRoom";
    import videoRoom from "../../components/operation/videoRoom";
    import ZcChart from "../../components/operation/ZcChart";
    import vuescroll from 'vuescroll/dist/vuescroll-slide'
    import api from "../../api/index"

    export default {
        name: "operation",
        components: {
            item,
            circle_chart,
            circle_chart1,
            offdevices,
            alarm,
            rate,
            perchart,
            threeDMRoom,
            videoRoom,
            ZcChart,
            vuescroll
        },
        data() {
            return {
                abbrRoom: false,
                abbrUrl: api.abbrUrl,
                ops: {
                    vuescroll: {scroller: {minZoom: 1, maxZoom: 1,}},
                    scrollPanel: {scrollingX: false,},
                    rail: {},
                    bar: {keepShow: true, background: '#c0c0c0'}
                },
                circle_value0: 50,
                first_style: {height: '9rem', width: '9rem'},
                second_style: {height: '15rem', width: '100%'},
                third_style: {width: '5.68rem', height: '6rem'},
                fourth_style: {width: '12rem', height: '100%'},
                thirdArr: [
                    {chart_name: 'sbzt_chart1', chart_color: '#85c65f', title: '北湖', val: '320', percent: '10'},
                    {chart_name: 'sbzt_chart2', chart_color: '#e1a832', title: '北湖', val: '320', percent: '10'},
                    {chart_name: 'sbzt_chart3', chart_color: '#046ad2', title: '北湖', val: '320', percent: '10'},
                    {chart_name: 'sbzt_chart4', chart_color: '#046ad2', title: '北湖', val: '320', percent: '10'},
                ],
                tdm_href: "",
                video_show: false,
                ctrlPanel_show: false
            };
        },
        mounted() {
            this.init()
            var timer = setInterval(this.init, 60000)
            this.$once('hook:beforeDestroy', () => {
                clearInterval(timer)
            })
        },
        methods: {
            init() {
                this.getRecWZL()
                this.getImgWZL()
                this.getCamZXL()
            },
            showMR() { //3D机房
                this.abbrRoom = true
                if (window.showJifang) {
                    window.showJifang()
                }
            },
            async getRecWZL() {
                try {
                    const res = await this.$http.post(api.getRecWZL)
                    if (res.status == '200' && res.data && res.data.data) {
                        let num = res.data.data.recordlostrate || 0
                        this.$refs.lxwzChart.val = Math.ceil(num)
                        this.$refs.lxwzChart.percent = Math.ceil(num)
                        this.$refs.lxwzChart.chart2()
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            async getImgWZL() {
                try {
                    const res = await this.$http.post(api.getImgWZL)
                    if (res.status == '200' && res.data && res.data.data) {
                        let num = res.data.data.count || 0
                        this.$refs.txwhChart.val = Math.ceil(num * 100)
                        this.$refs.txwhChart.percent = Math.ceil(num * 100)
                        this.$refs.txwhChart.chart2()
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            async getCamZXL() {
                try {
                    const res = await this.$http.post(api.getCamZXL)
                    if (res.status == '200' && res.data && res.data.data) {
                        let num = res.data.data.camonlinerate || 0
                        this.$refs.spzxChart.val = Math.ceil(num)
                        this.$refs.spzxChart.percent = Math.ceil(num)
                        this.$refs.spzxChart.chart2()
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            showVideos() {
                this.video_show = !this.video_show;
            },
            showCtrlPanel() {
                this.ctrlPanel_show = !this.ctrlPanel_show;
            },
            show3DInfo(event) {
                var name = event.currentTarget.getAttribute("name");
                if (name == "gjxx") {
                    if (window.showGaojing)
                        window.showGaojing([
                            {id: "RLGBGWH-004-1", sj: "设备断电", jb: "0"},
                            {id: "RLXQGWH-001-1", sj: "摄像头损坏", jb: "1"}
                        ]);
                } else if (name == "gdxx") {
                    if (window.showGongdan) window.showGongdan(name); //调用地图方法
                } else {
                    if (window.showPoint) window.showPoint(name); //调用地图方法
                }
            }
        }
    }
</script>

<style scoped>
    .left {
        width: 34rem;
        border: 0.02rem #00fcff solid;
    }

    .right {
        width: 34rem;
        border: 0.02rem #00fcff solid;
        display: flex;
        flex-direction: column;
    }

    .right .top {
        font-size: 1.24rem;
        color: #18ebf3;
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 0.5rem;

    }

    .yw_charts {
        display: flex;
        justify-content: space-around;
        padding: 1rem 0;
    }

    .video_info {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .video_zl .v_top {
        background: url("../../assets/operation/o_v_titlebg.png") center no-repeat;
        background-size: 100% 100%;
        text-align: center;
        font-size: 1.4rem;
        color: #00e4ff;
        line-height: 2rem;
        padding: 0 .5rem;
    }

    .video_zl .v_val {
        text-align: center;
        font-size: 1.2rem;
        color: white;
        margin-top: 0.5rem;
    }

    .left_bottom {
        height: 42%;
    }

    .left_bottom .box {
        height: calc(100% - 1rem);
        display: flex;
        flex-direction: column;
    }

    .form_chart {
        height: 12.4rem;
        position: relative;
    }

    #form_img1 {
        position: absolute;
        top: .5rem;
        left: 12rem;
        width: 10rem;
        height: 6.08rem;
        background: url("../../assets/operation/form_chart1.png") no-repeat;
        background-size: 90%;
        transition: background-size 1s;
    }

    #form_img1:hover {
        width: 10rem;
        height: 6.08rem;
        background: url("../../assets/operation/form_chart1.png") no-repeat;
        background-size: 100%;
    }

    #form_img2 {
        position: absolute;
        top: 3.20rem;
        left: 12rem;
        width: 10rem;
        height: 6.08rem;
        background: url("../../assets/operation/form_chart2.png") no-repeat;
        background-size: 90%;
        transition: background-size 1s;
    }

    #form_img2:hover {
        width: 10rem;
        height: 6.08rem;
        background: url("../../assets/operation/form_chart2.png") no-repeat;
        background-size: 100%;
    }

    #form_img3 {
        position: absolute;
        top: 5.3rem;
        left: 13.3rem;
        width: 10rem;
        height: 6.08rem;
        background: url("../../assets/operation/form_chart3.png") no-repeat;
        background-size: 90%;
        transition: background-size 1s;
    }

    #form_img3:hover {
        width: 10rem;
        height: 6.08rem;
        background: url("../../assets/operation/form_chart3.png") no-repeat;
        background-size: 100%;
    }

    #form_img4 {
        position: absolute;
        top: 7rem;
        left: 12.3rem;
        width: 10rem;
        height: 6.08rem;
        background: url("../../assets/operation/form_chart4.png") no-repeat;
        background-size: 90%;
        transition: background-size 1s;
    }

    #form_img4:hover {
        width: 10rem;
        height: 6.08rem;
        background: url("../../assets/operation/form_chart4.png") no-repeat;
        background-size: 100%;
    }

    .form_total {
        position: relative;
        display: inline-block;
        top: 55%;
        left: 5%;
        color: white;
        font-size: 1rem;
        width: 6.2rem;
        text-align: center;
        background: #0480a7;
    }

    .form_total .color {
        color: #11fbfb;
    }

    .form_top {
        position: absolute;
        display: inline-block;
        color: white;
        font-size: 1rem;
        width: 6.2rem;
        text-align: right;
    }

    .form_top1 {
        bottom: 10%;
    }

    .form_top2 {
        bottom: 30%;
        right: 20%;
    }

    .form_top3 {
        top: 32%;
        left: 18%;
    }

    .form_top4 {
        top: 15%;
        left: 18%;
    }

    .left_bottom .form_data {
        height: calc(100% - 12.4rem);
        position: relative;
    }

    .left table {
        width: 100%;
        height: 100%;
        color: white;
        font-size: 1.12rem;
        text-align: center;
    }

    .left thead {
        background-color: rgba(250, 250, 250, 0.05);
        height: 2.1rem;
        font-weight: bold;
    }

    .left thead th {
        padding: .2rem;
    }

    .left tbody tr td {
        padding: .5rem;
    }

    .left tbody tr:nth-child(odd) td {
        border-bottom: .21rem solid rgba(0, 230, 248, 0.3);
    }

    .left tbody tr:nth-child(even) td {
        border-bottom: .21rem solid #00e6f8;
    }

    .right_first {
        height: 44%;
    }

    .right_first .form_data {
        height: calc(100% - 15.5rem);
    }

    .right table {
        color: white;
        font-size: 1.12rem;
        text-align: center;
        width: 100%;
    }

    .right thead {
        background-color: rgba(57, 117, 174, 0.3);
        height: 2.1rem;
        font-weight: bold;
    }

    .right thead th {
        padding: .3rem;
    }

    .right tbody tr td {
        padding: .5rem;
    }

    .right tbody tr:nth-child(even) td {
        background-color: rgba(57, 117, 174, 0.3);
    }

    .center .border .box {
        width: 98.2%;
        height: 93%;
        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 111;
    }

    .center .border .close {
        width: 98.2%;
        height: 4%;
        background: #000f24;
        position: absolute;
        bottom: 1.3rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 111;
        color: #fff;
        font-weight: bold;
        font-size: 3rem;
        text-align: center;
        box-sizing: border-box;
        padding-top: 1rem;
    }

    .center .border .close .btn {
        cursor: pointer;
    }

    .center .border .tools {
        position: absolute;
        bottom: 2%;
        right: 0.2%;
        z-index: 9;
    }

    .center .border .tools .btn_groups {
        display: flex;
        align-items: center;
    }

    .center .border .tools button {
        border: 0.01rem solid #606c6d;
        width: 8rem;
        height: 2.52rem;
        background: none;
        color: #23fafb;
        font-size: 1.25rem;
        outline: none;
        margin-right: 1rem;
    }

    .center .border .tools button:hover {
        border: none;
        width: 8rem;
        height: 2.52rem;
        background: url("../../assets/operation/bg1.gif") no-repeat;
        background-size: 100% 100%;
        color: #23fafb;
        font-size: 1.25rem;
        outline: none;
    }

    .center .border .tools button.selected {
        border: none;
        width: 8rem;
        height: 2.52rem;
        background: url("../../assets/operation/bg1.gif") no-repeat;
        color: #23fafb;
        font-size: 1.25rem;
        outline: none;
    }

    .tools .btn {
        font-size: 1.4rem;
        line-height: 4rem;
        color: #fff;
        padding: 0 0.5rem 0 5rem;
        background: url("../../assets/placeImg/bg2.png") no-repeat left;
        background-size: 40% 100%;
        cursor: pointer;
    }

    .tools .btn:hover {
        background: url("../../assets/placeImg/bg3.png") no-repeat left;
        background-size: 40% 100%;
        color: #52fbfc;
    }

    @keyframes marquee {
        0% {
            transform: translateX(0px);
        }
        100% {
            transform: translateX(-1000px);
        }
    }

    .ctrlPanel {
        list-style: none;
        font-size: 1.04rem;
        color: white;
        text-align: center;
        padding: .5rem;
        width: 7rem;
        background-color: rgba(3, 14, 40, 0.8);
        position: absolute;
        bottom: 3.5rem;
        right: 1rem;
    }

    #sbzt_scroll {
        padding: 0 0.5rem;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
    }

    .right_third {
        flex: 1;
    }

    .zc_chart {
        width: 100%;
        height: calc(100% - 1.8rem);
    }

    .jkyw {
        display: flex;
        justify-content: space-around;
        padding: 0.5rem 0 1rem;
    }
</style>
