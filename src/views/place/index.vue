<template>
    <div class="container">
        <div class="left">
            <item1 title="长春重点场所分类" place="top_chart">
                <div class="video_zl">
                    <circle_chart chart_name="zdcsfl_chart" :chart_style="firstStyle" chart_type="chart_space"
                                  titleText="分类统计" ref="zdcsflChart">
                    </circle_chart>
                    <div class="video_info">
                        <div class="item">
                            <div class="v_top">{{scaleData[0]?scaleData[0].name:''}}</div>
                            <p class="v_val">{{scaleData[0]?scaleData[0].value:0}}%</p>
                        </div>
                        <div class="item">
                            <div class="v_top">{{scaleData[1]?scaleData[1].name:''}}</div>
                            <p class="v_val">{{scaleData[1]?scaleData[1].value:0}}%</p>
                        </div>
                    </div>
                </div>
            </item1>
            <item1 title="开发区重点场所分类" place="mid_chart">
                <div class="box">
                    <div class="scroll_box">
                        <div class="mid_chart_item">
                            <circle_chart1 chart_name="cd_chart" :chart_style="secondStyle"
                                           chart_type="chart_space_nobg" ref="cd_chart"
                                           titleText="长德区">
                            </circle_chart1>
                        </div>
                        <div class="mid_chart_item child-dom">
                            <circle_chart1 chart_name="kg_chart" :chart_style="secondStyle"
                                           chart_type="chart_space_nobg" ref="kg_chart"
                                           titleText="空港区">
                            </circle_chart1>
                        </div>
                        <div class="mid_chart_item child-dom">
                            <circle_chart1 chart_name="gx_chart" :chart_style="secondStyle"
                                           chart_type="chart_space_nobg" ref="gx_chart"
                                           titleText="高新区">
                            </circle_chart1>
                        </div>
                        <div class="mid_chart_item child-dom">
                            <circle_chart1 chart_name="bh_chart" :chart_style="secondStyle"
                                           chart_type="chart_space_nobg" ref="bh_chart"
                                           titleText="北湖区">
                            </circle_chart1>
                        </div>
                    </div>
                </div>
            </item1>
            <!--<item1 title="场所案件分类统计" place="bottom_chart">-->
            <!--<div class="box parent-dom">-->
            <!--<vuescroll :ops="ops">-->
            <!--<div class="left_bottom child-dom" v-for="(item,index) in 5" :key="index">-->
            <!--<div class="div_0">-->
            <!--<div class="div_1">案件管理1</div>-->
            <!--<div class="div_2">80%</div>-->
            <!--</div>-->
            <!--<div class="div_00">-->
            <!--<div class="div_bg"></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</vuescroll>-->
            <!--</div>-->
            <!--</item1>-->
        </div>
        <div class="center">
            <div class="border">
                <div class="top_group" v-show="!changeView">
                    <select class="sel_img" @change="handleMpaType($event)">
                        <option value="0">请选择</option>
                        <option value="1">热力图</option>
                        <option value="2">灯光图</option>
                        <option value="3">高度图</option>
                    </select>
                </div>
                <div class="bottom_group" v-show="!changeView">
                    <div class="btn" @click="showFenBu">警力分布</div>
                </div>
            </div>
        </div>
        <div class="right">
            <item title="重点建筑物场景" :place="['mid_part',changeView?'mid_part_big':'mid_part_small']">
                <div class="main">
                    <img class="default_img" v-if="!importBuidingUrl" src="../../assets/placeImg/right_pic.jpg">
                    <iframe v-else :src="importBuidingUrl" class="box" frameborder="0"></iframe>
                </div>
            </item>
            <div class="white">
                <div class="btn" @click="handleView">
                    <div class="left_botttom">↙</div>
                    <div class="right_top">↗</div>
                </div>
            </div>
            <div class="top_part">
                <div class="search">
                    <searchView ref="searchInput" :myData="listData" @fun_search="getMainUnit"
                                @fun_select="show3DVideo">
                    </searchView>
                </div>
                <div class="btn_0">
                    <ul class="clear">
                        <li v-for="(item, index) in sortList" :key="index">
                            <button @click="getMainUnitByType(item.type)">{{item.name}}</button>
                        </li>
                    </ul>
                    <div v-show="showSortDetail" class="mid_box">
                        <div class="clear list">
                            <div class="close" @click="showSortDetail=false">×</div>
                            <div class="cell" v-for="(item, index) in unitList" @click="show3DVideo1(item)"
                                 :key="index">{{item.name}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <item title="视频监控" place="bottom_part">
                <div class="listImg parent-dom" style="overflow: hidden">
                    <!--<vuescroll :ops="ops1">-->
                        <ul class="video_wrap child-dom autoScroll">
                            <li class="item" v-for="(item,index) in videoArr" :key="index">
                                <PlayVideo is-cut="1" :obj="item"></PlayVideo>
                            </li>
                        </ul>
                    <!--</vuescroll>-->
                </div>
            </item>
        </div>
    </div>
</template>

<script>
    import PlayVideo from "../../components/playVideo"
    import item1 from "../../components/item1"
    import item from "../../components/item"
    import circle_chart from "../../components/circle_chart"
    import circle_chart1 from "../../components/circle_chart1"
    import searchView from "../../components/searchView"
    import echarts from 'echarts'
    import api from "../../api/index"
    import vuescroll from 'vuescroll/dist/vuescroll-slide'

    export default {
        name: "place",
        components: {item1, vuescroll, item, circle_chart, circle_chart1, echarts, searchView, PlayVideo},
        data() {
            return {
                changeView: false,
                scaleData: [],
                firstStyle: {width: '100%', height: '29rem'},
                secondStyle: {width: '100%', height: '100%'},
                secondArr: [
                    {title: '长德区', chart_name: 'cs1_chart'},
                    {title: '空港区', chart_name: 'cs2_chart'},
                    {title: '高新区', chart_name: 'cs3_chart'},
                    {title: '北湖区', chart_name: 'cs4_chart'}
                ],
                ops: {
                    vuescroll: {scroller: {minZoom: 1, maxZoom: 1,}},
                    scrollPanel: {scrollingX: false,},
                    rail: {},
                    bar: {background: '#c0c0c0'}
                },
                ops1: {
                    vuescroll: {scroller: {minZoom: 1, maxZoom: 1,}},
                    scrollPanel: {scrollingY: false,},
                    rail: {},
                    bar: {keepShow: true, background: '#c0c0c0'}
                },
                importBuidingUrl: '',
                showSortDetail: false,
                listData: [],
                tdm_href: '',
                sortList: [
                    {name: '住宿交际', type: 'zsjj'},
                    {name: '洗浴美容', type: 'xymr'},
                    {name: '文化交流', type: 'whjl'},
                    {name: '购物场所', type: 'gwcs'},
                    {name: '地铁轻轨', type: 'dtqg'},
                    {name: '医院', type: 'yy'},
                    {name: '文化娱乐', type: 'whyl'},
                    {name: '警力', type: 'jl'},
                    {name: '政府', type: 'zf'},
                    {name: '企业', type: 'qy'},

                ],
                unitList: [],
                videoArr: [{}, {}, {}, {}]
            }
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
                this.getMainUnitTypeStat()
                this.getMainUnitAreaTypeStat()
            },
            handleView() {
                this.changeView = !this.changeView
                if (this.changeView) {
                    document.getElementById("threeDEarth").className += ' earth_place_small'
                } else {
                    document.getElementById("threeDEarth").className = 'earth_place'
                }
            },
            // 开发区重点场所分类
            async getMainUnitAreaTypeStat() {
                try {
                    const res = await this.$http.post(api.getMainUnitAreaTypeStat)
                    if (res.status == '200' && res.data && Array.isArray(res.data.data)) {
                        let arr = res.data.data
                        let gxArr = [], bhArr = [], cdArr = [], kgArr = []
                        for (let i = 0; i < arr.length; i++) {
                            switch (arr[i].area_name) {
                                case '高新':
                                    gxArr.push({name: arr[i].typename, value: arr[i].num})
                                    break
                                case '北湖':
                                    bhArr.push({name: arr[i].typename, value: arr[i].num})
                                    break
                                case '长德':
                                    cdArr.push({name: arr[i].typename, value: arr[i].num})
                                    break
                                case '空港':
                                    kgArr.push({name: arr[i].typename, value: arr[i].num})
                                    break
                            }
                        }
                        this.$refs.cd_chart.scaleData = cdArr
                        this.$refs.kg_chart.scaleData = kgArr
                        this.$refs.gx_chart.scaleData = gxArr
                        this.$refs.bh_chart.scaleData = bhArr
                        this.$refs.cd_chart.chart3_1()
                        this.$refs.kg_chart.chart3_1()
                        this.$refs.gx_chart.chart3_1()
                        this.$refs.bh_chart.chart3_1()
                    }
                } catch (e) {
                    console.log(e)
                }
            },
            // 长春重点场所分类
            async getMainUnitTypeStat() {
                try {
                    const res = await this.$http.post(api.getMainUnitTypeStat)
                    if (res.status == '200' && res.data && Array.isArray(res.data.data)) {
                        let arr = res.data.data
                        let newArr = []
                        for (let i = 0; i < arr.length; i++) {
                            newArr.push({name: arr[i].typename, value: arr[i].num})
                        }
                        this.scaleData = newArr
                        this.$refs.zdcsflChart.scaleData = newArr
                        this.$refs.zdcsflChart.init()
                    }
                } catch (e) {
                    console.log(e)
                }
            },
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
                            window.showGdt("cangsuo")
                        break
                }
            },
            showFenBu() {
                if (window.jingLiFenBu) {
                    window.jingLiFenBu()
                }
            },
            // 输入关键字搜索地点
            async getMainUnit(val) {
                this.listData = [{name: '正在查询...', void: true}]
                try {
                    const res = await this.$http.post(api.getMainUnit, {}, {params: {keyword: val}})
                    if (res.status == 200 && Array.isArray(res.data.data) && res.data.data.length > 0) {
                        this.listData = res.data.data
                    } else {
                        this.listData = [{name: '暂无地点'}]
                    }
                } catch (err) {
                    this.listData = [{name: '网络错误', void: true}]
                    console.log(err)
                }
            },
            show3DVideo(val) {
                console.log(val)
                if (window.findbuilding) {
                    window.findbuilding([val])
                }
                var randomnumber=Math.floor(Math.random()*100000);
                this.importBuidingUrl = val.cj_url?val.cj_url+"?"+randomnumber:''
                this.listData = []
            },
            // 按分类搜索地点
            async getMainUnitByType(val) {
                this.showSortDetail = true
                this.unitList = [{name: '正在查询...', void: true}]
                try {
                    const res = await this.$http.post(api.getMainUnitByType, {}, {params: {type: val}})
                    if (res.status == 200) {
                        this.unitList = res.data.data.length > 0 ? res.data.data : [{name: '暂无地点'}]
                    }
                } catch (err) {
                    console.log(err)
                }
            },
            show3DVideo1(val) {
                if (val.void) {
                    return
                }
                this.getZWVideos(val);
                var randomnumber=Math.floor(Math.random()*100000);

                this.importBuidingUrl = val.cj_url?val.cj_url+"?"+randomnumber:''
                this.$refs.searchInput.keyWord = val.name
                this.showSortDetail = false
                if (window.findbuilding) {
                    try {
                        window.findbuilding([val])
                    } catch (e) {
                        console.log(e)
                    }
                }
            },
            // 获取查询地公里范围内摄像头
            async getZWVideos(obj) {
                try {
                    const res = await this.$http.post(api.getZWVideos, {}, {
                        params: {
                            lng: obj.lng,
                            lat: obj.lat,
                            size: api.videoCount
                        }
                    })
                    if (res && res.data && Array.isArray(res.data.data)) {
                        this.videoArr = res.data.data
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }


</script>

<style scoped>
    @font-face {
        font-family: "minCircle";
        src: url("../../assets/迷你简细圆.TTF");
    }

    .left {
        width: 30rem;
        padding: 0.2rem 0;
        background: #040e22 url("../../assets/placeImg/left_1_bg.png") left top no-repeat;
        background-size: 100% 100%;
        font-family: "minCircle";
    }

    .right {
        width: 40rem;
        font-family: "minCircle";
        background: #060d22 url("../../assets/placeImg/left_1_bg.png") no-repeat left top;
        background-size: 100% 100%;
    }

    .left .top_chart {
        height: 40%;
        box-sizing: border-box;
    }

    .video_zl {
        height: calc(100% - 2.1rem);
    }

    .video_info {
        display: flex;
        justify-content: space-around;
    }

    .video_info .item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .video_zl .v_top {
        width: 9rem;
        background: url("../../assets/operation/o_v_titlebg.png") center no-repeat;
        background-size: 100% 100%;
        text-align: center;
        font-size: .45rem;
        color: #00e4ff;
        line-height: 2rem;
    }

    .video_zl .v_val {
        font-size: 1.6rem;
        color: white;
        padding-left: 0.5rem;
    }

    .left .mid_chart {
        height: 60%;
        padding-top: 2%;
        box-sizing: border-box;
    }

    .left .mid_chart .box {
        height: calc(100% - 2.5rem);
        position: relative;
        overflow: hidden;
    }

    .left .mid_chart .box .scroll_box {
        width: 100%;
        position: absolute;
        top: 5%;
        animation: up-down 30s linear infinite;
    }

    .left .mid_chart .box .scroll_box:hover {
        animation-play-state: paused;
    }

    @keyframes up-down {
        50% {
            top: -100%;
        }
        100% {
            top: 5%;
        }
    }

    .left .mid_chart_item {
        height: 25.5rem;
    }
    .autoScroll{
        width: 100%;
        animation: left-right 40s linear infinite;
    }
    @keyframes left-right {
        0% {
            margin-left: 0;
        }
        50%{
            margin-left:-165%;
        }
        100% {
            margin-left: 5%;
        }
    }
    .autoScroll:hover{
        animation-play-state: paused;
    }

    .left .bottom_chart {
        height: 21%;
    }

    .left .bottom_chart .box {
        height: calc(100% - 2.3rem);
    }

    .left_bottom {
        height: 3.54rem;
        margin: 0 1rem;
    }

    .left_bottom .div_0 {
        width: 90%;
        height: 2.34rem;
        line-height: 2.34rem;
        font-size: 1.14rem;
        display: flex;
        justify-content: space-between;
    }

    .left_bottom .div_0 .div_1 {
        color: #fff;
    }

    .left_bottom .div_0 .div_2 {
        color: #f6e242;
    }

    .left_bottom .div_00 {
        height: 0.8rem;
        background: #0d2334;
        border-radius: 0 0.3rem 0.3rem 0;
    }

    .left_bottom .div_00 .div_bg {
        width: 80%;
        height: 100%;
        background: linear-gradient(left, #003335, #00f1fa);
        border-radius: 0 0.3rem 0.3rem 0;
    }

    .sel_img {
        width: 9rem;
        height: 3rem;
        color: #fff;
        padding-left: 1rem;
        font-size: 1.4rem;
        text-align: center;
        background: none;
        border: 1px solid #00c4dc;
        outline: none;
        /*去掉默认的下拉三角*/
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        /*添加下拉三角图标*/
        background: url("../../assets/placeImg/bg1.png") no-repeat 87% center transparent;
        background-size: 20% 30%;
    }

    .sel_img option {
        background-color: rgba(255, 255, 255, 0);
        color: #000;
    }

    .bottom_group {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        z-index: 8;
    }

    .bottom_group .btn {
        float: left;
        font-size: 1.4rem;
        line-height: 4rem;
        color: #fff;
        padding: 0 0.5rem 0 5rem;
        background: url("../../assets/placeImg/bg2.png") no-repeat left;
        background-size: 40% 100%;
        cursor: pointer;
    }

    .bottom_group .btn:hover {
        background: url("../../assets/placeImg/bg3.png") no-repeat left;
        background-size: 40% 100%;
        color: #52fbfc;
    }

    .right .top_part {
        height: 33%;
        width: 100%;
        box-sizing: border-box;
        padding: 0 .5rem;
    }

    .right .top_part .search {
        height: 2.5rem;
        margin: .1rem auto 0;
    }

    .right .top_part .btn_0 {
        height: calc(100% - 3rem);
        margin: 0.5rem auto 0;
        position: relative;
        overflow: hidden;
    }

    .right .top_part .btn_0 ul {
        height: 100%;
    }

    .right .top_part .btn_0 li {
        width: 50%;
        height: 20%;
        float: left;
        display: flex;
        justify-content: center;
    }

    .right .top_part .btn_0 li button {
        border: none;
        cursor: pointer;
        width: 12rem;
        height: 3.5rem;
        color: #50d5f5;
        font-size: 1.24rem;
        background: salmon url(../../assets/placeImg/btn_bg.jpg) no-repeat;
        background-size: 100% 100%;
    }

    .right .top_part .btn_0 li button:hover {
        padding-left: 1.09rem;
        padding-right: 1.09rem;
        color: #20efeb;
        background: url(../../assets/placeImg/btn_bg_hover.jpg) no-repeat;
        background-size: 104.2% 100%;
        text-align: left;
    }

    .right .top_part .btn_0 li button:focus {
        outline: none;
    }

    .right .mid_part {
        position: absolute;
        box-sizing: border-box;
        padding: 0.5rem;
        z-index: 9;
        transition: all 0.5s;
    }

    .right .mid_part_small {
        width: 40rem;
        height: 42%;
        top: 0;
        right: 0;
    }

    .right .mid_part_big {
        background: #000f24;
        width: calc(100% - 72.6rem);
        height: 97.11%;
        top: 1.1rem;
        right: 41.4rem;

    }

    .right .white {
        height: 42%;
        position: relative;
    }

    .right .white .btn {
        position: absolute;
        left: 0.5rem;
        bottom: 1rem;
        width: 3rem;
        height: 2.2rem;
        border: 0.2rem solid #fff;
        border-radius: 10%;
        cursor: pointer;
        color: #fff;
        font-size: 1.8rem;
        z-index: 10;
        user-select: none;
    }

    .right .white .btn .left_botttom {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .right .white .btn .right_top {
        position: absolute;
        right: 0;
        top: 0;
    }

    .right .space {
        height: 1%;
    }

    .right .mid_part .main {
        height: calc(100% - 3rem);
        padding-top: 0.5rem;
    }

    .right .mid_part .main .box {
        width: 100%;
        height: 100%;
    }

    .right .mid_part .main .default_img {
        width: 100%;
        height: 100%;
    }

    .right .bottom_part {
        height: 25%;
        box-sizing: border-box;
        padding: 0 0.5rem;
        overflow: hidden;
    }

    .right .listImg {
        /*height: calc(100% - 3rem);*/
        padding-top: 0.5rem;
    }

    .right .listImg .video_wrap {
        display: flex;
        padding-bottom: 1rem;
    }

    .right .listImg .video_wrap .item {
        width: 25rem;
        height: 100%;
        margin-right: 0.5rem;
        flex-shrink: 0;
    }

    .mid_box {
        position: absolute;
        top: 0rem;
        padding-top: 1.5rem;
        width: 100%;
        height: 100%;
        background-color: #30657ed5;
    }

    .list {
        width: 100%;
        color: #30657e;
        height: 100%;
        overflow-y: scroll;
        font-size: .8rem;
    }

    .list::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .list .cell {
        color: #24aec0;
        padding: .3rem;
        cursor: pointer;
        font-size: 1.4rem;
    }

    .list .cell:hover {
        color: #fff;
    }

    .close {
        position: absolute;
        right: 0;
        top: 0;
        width: 1.8rem;
        line-height: 1.8rem;
        font-size: 1.8rem;
        color: #00c4dc;
        text-align: center;
        cursor: pointer;
    }

    .close:hover {
        color: rgb(255, 255, 255);
    }
</style>
