<template>
    <div class="container">
        <div class="left">
            <item title="指挥中心" place="itemLeft left_first">
                <div class="box">
                    <ZhChart></ZhChart>
                </div>
            </item>
            <item title="案件统计" place="itemLeft left_second">
                <div id="anjian">
                    <div class="item">
                        <div>刑事案件</div>
                        <div><span style="color:white">5</span>%</div>
                    </div>
                    <hr v-show="this.aj_show_index===0"/>
                    <div class="item">
                        <div>群体案件</div>
                        <div><span style="color:white">10</span>%</div>
                    </div>
                    <hr v-show="this.aj_show_index===1"/>
                    <div class="item">
                        <div>治安案件</div>
                        <div><span style="color:white">15</span>%</div>
                    </div>
                    <hr v-show="this.aj_show_index===2"/>
                </div>
                <div id="anjian_charts">
                    <circle_chart v-for="(e,i) in anjianArr" :ref="e.ref" :chart_name="e.chart_name"
                                  chart_type="chart_line"
                                  :chart_style="small_style" :title="e.title" :val="e.val" :percent="e.percent">
                    </circle_chart>
                </div>
            </item>
            <item title="场所管控" place="itemLeft left_third">
                <div class="cs_content">
                    <div class="cs_list">
                        <div :class="{up:cs_index==1,total:cs_index!=1}" @mouseover="cs_mouseover(1)">
                            <table align="center">
                                <tr>
                                    <td>本月新增</td>
                                    <td>{{changsuoArr.upNum||0}}</td>
                                </tr>
                                <tr>
                                    <td>本月消减</td>
                                    <td>{{changsuoArr.downNum||0}}</td>
                                </tr>
                            </table>
                        </div>
                        <div :class="{up:cs_index!=1,total:cs_index==1}" @mouseover="cs_mouseover(2)">
                            <table align="center">
                                <tr>
                                    <td>场所总数</td>
                                    <td>{{changsuoArr.totalNum||0}}</td>
                                </tr>
                                <tr>
                                    <td>场所类别</td>
                                    <td>{{changsuoArr.typeNum||0}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <CsChart ref="csgk"></CsChart>
                </div>
            </item>
        </div>
        <div class="center">
            <div class="bottom">
                <button name="rlsb" @click="earth_action" :class="{ selected:changeSelected == 'rlsb'}">枪机摄像机</button>
                <button name="kksxt" @click="earth_action" :class="{ selected:changeSelected == 'kksxt'}">球机摄像机</button>
                <button name="gdsxt" @click="earth_action" :class="{ selected:changeSelected == 'gdsxt'}">高点摄像机</button>
                <button name="wftz" @click="earth_action" :class="{ selected:changeSelected == 'wftz'}">WIFI探针</button>
                <button name="dzwl" @click="earth_action" :class="{ selected:changeSelected == 'dzwl'}">电子围栏</button>
                <button name="csbj" @click="earth_action" :class="{ selected:changeSelected == 'csbj'}">场所布局</button>
                <button name="jlfb" @click="earth_action" :class="{ selected:changeSelected == 'jlfb'}">警力分布</button>
                <!--<button name="ajfb" @click="earth_action" :class="{ selected:changeSelected == 'ajfb'}">案件分布</button>-->
            </div>
        </div>
        <div class="right">
            <item title="监控运维" place="itemRight right_first">
                <div id="yunwei_charts">
                    <circle_chart ref="lxwz_chart" chart_name="lxwz_chart" :chart_style="big_style"
                                  chart_type="chart_noLine" title="录像完整率">
                    </circle_chart>
                    <circle_chart ref="txwh_chart" chart_name="txwh_chart" :chart_style="big_style"
                                  chart_type="chart_noLine" title="图像完好率">
                    </circle_chart>
                    <circle_chart ref="spzx_chart" chart_name="spzx_chart" :chart_style="big_style"
                                  chart_type="chart_noLine" title="视频在线率">
                    </circle_chart>
                </div>
            </item>
            <!--<item title="视频监控" place="itemRight right_second">-->
                <!--<div id="shipin_look">-->
                    <!--<div class="left_part">-->
                        <!--<searchBox :fun_data="show3DVideo"></searchBox>-->
                        <!--<div class="first_video">-->
                            <!--<playVideo :isCut="0" :obj="vdArr[0]"></playVideo>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="right_part">-->
                        <!--<div v-for="(item,index) in vdArr" v-if="index" :key="index" class="cell_video">-->
                            <!--<playVideo :isCut="1" :obj="item"></playVideo>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</item>-->
            <item title="告警信息" place="itemRight right_bottom">
                <div id="photo">
                    <div class="ph_content" v-for="(item,index) in alarmArr">
                        <div class="ph_title">
                            <div>{{item.name}}</div>
                            <div><span>{{item.num}}</span>次</div>
                        </div>
                        <div class="ph_3d">
                            <RotatePhoto></RotatePhoto>
                        </div>
                    </div>
                </div>
            </item>
        </div>
    </div>
</template>

<script>
    import item from "../../components/item"
    import circle_chart from "../../components/circle_chart"
    import RotatePhoto from "../../components/RotatePhoto"
    import playVideo from "../../components/playVideo"
    import searchBox from "../../components/searchBox"
    import api from "../../api/index"
    import ZhChart from './ZhChart'
    import CsChart from './CsChart'

    export default {
        name: "home",
        components: {item, circle_chart, RotatePhoto, playVideo, searchBox, ZhChart, CsChart},
        data() {
            console.log("index data init");
            return {
                spzx_value: 60,
                lxwz_value: 60,
                txwh_value: 60,
                changsuoArr: {},
                anjianArr: [
                    {
                        ref: 'gaoxin_ref',
                        chart_name: 'gaoxin_chart',
                        chart_color: '#85c65f',
                        title: '高新区',
                        val: '3200',
                        percent: '80'
                    },
                    {
                        ref: 'beihu_ref',
                        chart_name: 'beihu_chart',
                        chart_color: '#e1a832',
                        title: '北湖区',
                        val: '320',
                        percent: '10'
                    },
                    {
                        ref: 'changde_ref',
                        chart_name: 'changde_chart',
                        chart_color: '#046ad2',
                        title: '长德区',
                        val: '300',
                        percent: '30'
                    },
                    {
                        ref: 'konggang_ref',
                        chart_name: 'konggang_chart',
                        chart_color: '#046ad2',
                        title: '空港区',
                        val: '1200',
                        percent: '60'
                    },
                ],
                small_style: {height: '100%', width: '96%'},
                big_style: {height: '13rem', width: '13rem'},
                // vdArr: [{}, {}, {}, {}, {}],
                changeSelected: '',
                aj_show_index: 0,
                cs_index: 1,
                vd_index: 1,
                alarmArr: [{name: '人脸识别告警数', num: '112'}, {name: '卡扣车辆识别告警数', num: '302'}]
            }
        },
        computed: {
            vdArr() {
                return this.$store.state.vdArr
            }
        },
        mounted() {
            this.init()
            var timer = setInterval(this.init, 60000)
            var timer1 = setInterval(this.aj_show, 3000)
            this.$once('hook:beforeDestroy', () => {
                clearInterval(timer)
                clearInterval(timer1)
            })
            window.addshipinqiang = this.addshipinqiang
            window.playVideo = function (data) {// playVideo data格式 name,channelid
                this.vd_index = this.vd_index + 1;
                if (this.vd_index == 6) {
                    this.vd_index = 1;
                }
                let label = "vd" + this.vd_index + "_clid";
                //video src channelid
                this[label] = "";
            }
        },
        methods: {
            init() {
                this.getMainUnitStat()
                this.getMainUnitTypeStat()
                this.getRecWZL()
                this.getImgWZL()
                this.getCamZXL()
            },
            async getRecWZL() {
                try {
                    const res = await this.$http.post(api.getRecWZL)
                    if (res.status == '200' && res.data && res.data.data) {
                        let num = res.data.data.recordlostrate || 0
                        this.$refs.lxwz_chart.val = Math.ceil(num)
                        this.$refs.lxwz_chart.percent = Math.ceil(num)
                        this.$refs.lxwz_chart.chart2()
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
                        this.$refs.txwh_chart.val = Math.ceil(num * 100)
                        this.$refs.txwh_chart.percent = Math.ceil(num * 100)
                        this.$refs.txwh_chart.chart2()
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
                        this.$refs.spzx_chart.val = Math.ceil(num)
                        this.$refs.spzx_chart.percent = Math.ceil(num)
                        this.$refs.spzx_chart.chart2()
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            async getMainUnitTypeStat() {
                try {
                    const res = await this.$http.post(api.getMainUnitTypeStat)
                    if (res.status == '200' && res.data && Array.isArray(res.data.data)) {
                        let arr = res.data.data
                        let gradeCs = []
                        let visitsCs = []
                        for (let i = 0; i < arr.length; i++) {
                            gradeCs.push(arr[i].typename)
                            visitsCs.push(arr[i].num)
                        }
                        this.$refs.csgk.grade = gradeCs
                        this.$refs.csgk.visits = visitsCs
                        this.$refs.csgk.cs_chart()
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            async getMainUnitStat() {
                try {
                    const res = await this.$http.post(api.getMainUnitStat)
                    if (res.status == '200' && res.data && res.data.data) {
                        this.changsuoArr = res.data.data
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            earth_action(event) {
                //设置选择按钮样式
                var name = event.currentTarget.name;
                this.changeSelected = name;
                //业务逻辑，触发地图方法
                window.showPoint(this.changeSelected);
            },
            aj_show() {
                let index = parseInt(this.aj_show_index);
                index = index + 1;
                if (index >= 3) {
                    this.aj_show_index = 0;

                } else {
                    this.aj_show_index = index;
                }
                //图表联动
                // this.$refs.gaoxin_ref.init();
                // this.$refs.beihu_ref.init();
                // this.$refs.changde_ref.init();
                // this.$refs.konggang_ref.init();
            },
            cs_mouseover(value) {
                this.cs_index = value
            },
            async show3DVideo(val) { // 视频监控搜索
                //查询相关视频
                // let code = val.code.substring(0, val.code.lastIndexOf('-'))
                //val : 点位编号：code 点位分项:pitem 施工单位：unit 区域: area 类别: type  经纬度:point[精度,维度]
                if (window.showShipinqiang)
                    window.showShipinqiang([{
                        unit: val.ownerunit,
                        area: val.subjectname,
                        lng: val.longitude,
                        lat: val.latitude,
                        videoU: val
                    }])
            },
            addshipinqiang(obj) {
                debugger
                console.log('add');
                let has = false;
                for (let i = 0; i < this.$store.state.vdArr.length; i++) {
                    if (this.$store.state.vdArr[i].cameraid == obj.cameraid) {
                        //删除并追加到第一位
                        if (0 != i) {
                            var obj = this.vdArr[i];
                            this.$store.state.vdArr.splice(i, 1);
                            this.$store.state.vdArr.unshift(obj);
                        }
                        has = true;
                        break
                    }
                }
                if (!has) {//没有
                    this.$store.state.vdArr.unshift(obj || {});
                    var val = this.$store.state.vdArr.pop();

                    if (undefined != val.cameraid && val.cameraid != "") {
                        console.log("关闭视频流");
                        let url = api.vss_close_url.replace("{channelid}", val.cameraid).replace("{type}", "1").replace("{videourltype}", "hls");
                        this.$http.get(url).then((response) => {
                            var data = response.data;
                            if (data.errcode == 0) {
                                // if (hls != null) {
                                //     hls.destroy();
                                //     hls = null;
                                // }
                            }
                        }, (response) => {
                            console.log("出错了");
                        }).catch(function (response) {
                            console.log(response)
                        })
                    }
                }
            }
            // let flag = 0
            // for (let i = 0; i < this.vdArr.length; i++) {
            //     if (this.vdArr[i].cameraid == obj.cameraid) {
            //         flag = i + 1
            //         break
            //     }
            // }
            // if (flag) {
            //     this.vdArr.splice(flag - 1, 1)
            // } else {
            //     var val = this.vdArr.pop()
            //     //关闭视频流
            //     console.log("关闭视频流");
            //     let url = api.vss_close_url.replace("{channelid}", val).replace("{type}", "1").replace("{videourltype}", "hls");
            //     this.$http.get(url).then((response) => {
            //         var data = response.data;
            //         if (data.errcode == 0) {
            //             if(hls!=null){
            //                 hls.destroy();
            //                 hls=null;
            //             }
            //         }
            //     }, (response) => {
            //         console.log("出错了");
            //     }).catch(function (response) {
            //         console.log(response)
            //     })
            // }
            // this.vdArr.unshift(obj || {})
        }
    }
</script>

<style scoped>
    .left {
        width: 36rem;
        background: url("../../assets/home/left.png") no-repeat;
        background-size: 100% calc(100% - 2px);
    }

    .right {
        width: 36rem;
        background: url("../../assets/home/right.png") no-repeat;
        background-size: 100% calc(100% - 2px);
        display: flex;
        flex-direction: column;
    }

    .left_first {
        height: 30%;
        box-sizing: border-box;
    }

    .left_first .box {
        height: calc(100% - 2rem);
    }

    .bottom {
        width: 100%;
        height: 3.82rem;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        z-index: 9;
    }

    .bottom button {
        cursor: pointer;
        height: 2.82rem;
        width: 7.56rem;
        background: url("../../assets/home/btn.png") no-repeat top;
        background-size: cover;
        border: none;
        font-size: 1.14rem;
        color: white;
        text-align: center;
        outline: none;
    }

    .bottom button.selected {
        height: 3.82rem;
        background: url("../../assets/home/btn_selectd.png") no-repeat top;
        background-size: cover;
        animation: nav_btn linear 2s 1.5s infinite;
        font-weight: bold;
        padding-bottom: 1rem;
        margin-bottom: 0;
    }

    .left_second {
        height: 25%;
        box-sizing: border-box;
    }

    #anjian {
        height: 40%;
        font-size: 1.2rem;
        color: #00f0fe;
        padding: 1.4rem 1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #anjian hr {
        color: #00f0fe;
        background-color: #00f0fe;
        border-color: #00f0fe;
        box-shadow: 0 0 0.2rem #FFF;
        height: 0.02rem;
        width: 100%;
    }

    #anjian .item {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0;
    }

    #anjian_charts {
        height: 60%;
        display: flex;
        justify-content: space-around;
    }

    .left_third {
        height: 45%;
        box-sizing: border-box;
    }

    .cs_content {
        height: calc(100% - 2rem);
        width: 100%;
        padding: 1rem 0 0;
    }

    .cs_content .cs_list {
        height: 25%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cs_content .cs_list .up {
        width: 15rem;
        height: 5rem;
        background: url("../../assets/home/changsuo_selected.png") center no-repeat;
        background-size: cover;
        font-size: 1.14rem;
        color: white;
        cursor: pointer;
    }

    .cs_content .cs_list .up table {
        padding-top: 6%;
        width: 100%;
    }

    .cs_content div.up table td:nth-child(odd) {
        text-align: left;
        padding-left: 1.50rem;
    }

    .cs_content div.total {
        height: 5rem;
        width: 15rem;
        cursor: pointer;
        font-size: .94rem;
        color: white;
    }

    .cs_content div.total table {
        padding-top: 6%;
        width: 90%;
        padding-left: 1.50rem;
    }

    .cs_content div.total table td {
        text-align: left;
    }

    .right_first {
        /*height: 20%;*/
    }

    #yunwei_charts {
        /*height: calc(100% - 1rem);*/
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 0.5rem;
    }

    #yunwei_charts div {
        flex: 1;
    }

    .right_second {
        flex: 1;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }

    #shipin_look {
        padding: 0 0.2rem;
        height: calc(100% - 2rem);
    }

    #shipin_look .left_part {
        /*height: 44%;*/
        overflow: hidden;
        /*margin-bottom: 2rem;*/
    }

    #shipin_look .left_part .first_video {
        /*margin-top: 0rem;*/
        /*height: calc(100% - 2.8rem);*/
        /*height: 25rem;*/
    }

    #shipin_look .right_part {
        overflow: hidden;
        /*height: 50%;*/
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 0.5em;
    }

    #shipin_look .right_part .cell_video {
        width: 50%;
        height: 33%;
        padding-top: 0.5rem;
        box-sizing: border-box;
    }

    #shipin_look .right_part .cell_video:nth-child(odd) {
        padding-right: 0.3rem;
    }

    .right_bottom {
        height: 26.5rem;
    }

    #photo {
        height: calc(100% - 2rem);
        display: flex;
        overflow: hidden;
    }

    #photo .ph_content {
        flex: 1;
    }

    #photo .ph_3d {
        background: url("../../assets/home/home_photo_bg.png") no-repeat center;
        background-size: 100% 74%;
        height: calc(100% - 2rem);
        width: 100%;
    }

    #photo .ph_title {
        background: url("../../assets/home/warn_title_line.png") no-repeat bottom center;
        background-size: 90% 20%;
        font-size: 1.1rem;
        color: white;
        height: 2rem;
        line-height: 2rem;
        text-align: left;
        padding: 2% 5%;
        display: flex;
        justify-content: space-between;
    }

    #photo .ph_title div:nth-child(2) span {
        color: #ca0816;
    }
</style>
