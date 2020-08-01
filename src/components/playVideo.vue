<template>
    <div class="bg">
        <div class="video">
            <video :style="vheight" muted controls ref="videobox" poster="../assets/common/vbg.jpg"></video>
        </div>
        <div class="info" :title="obj.name">
            <span class="name">{{cutTitle}}</span>
            <span class="state">[{{obj.onlinestatus | onlinestatusFormat}}]</span>
        </div>
    </div>
</template>

<script>
    import api from "../api/index.js"

    window.Hls = require('hls.js');
    export default {
        name: "playVideo",
        props: ['obj',"isCut"],
        components: {},
        computed:{
            channelid(){
                return this.obj.vxexternalid
            },
            cutTitle(){
                let val = this.obj.name;
                if(undefined==val){
                    return "";
                }
                if(this.isCut=="1"){
                    if(val.length>6){
                        return val.substring(0,6)+"..."
                    }
                }
                return val;
            },
            vheight(){
                if(this.isCut=="1"){
                    return "height:11rem";
                }else{
                    return "height:18rem";
                }
            }
        },
        data() {
            return {
                hls:null
            }
        },
        filters:{
            onlinestatusFormat(value){
                switch (value) {
                    case '0':
                        return '不在线'
                    case '1':
                        return '在线'
                    case '4':
                        return '未知'
                    default:
                        return '未接入'
                }
            }
        },
        methods: {
            initVideo() {
                let video = this.$refs.videobox;//document.getElementById('video');
                if (Hls.isSupported()) {
                    this.hls = new Hls();
                    this.hls.loadSource(this.src);
                    this.hls.attachMedia(video);
                    this.hls.on(Hls.Events.MANIFEST_PARSED, function () {
                        video.play();
                    });
                }
                // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
                // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
                // This is using the built-in support of the plain video element, without using hls.js.
                // Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
                // white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
                else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = this.src;
                    video.addEventListener('loadedmetadata', function () {
                        video.play();
                    });
                }
            },
            init() {
                let url = api.vss_url.replace("{channelid}", this.channelid).replace("{type}", "1").replace("{videourltype}", "hls");
                this.$http.get(url).then((response) => {
                    var data = response.data;
                    // {
                    //     "errcode":0,
                    //     "errdesc":"OK",
                    //     "strsessionid":"44030000001320000001",
                    //     "videourl":"http://192.168.1.230:8080/video/44030000001320000001.m3u8"
                    // }
                    if (data.errcode == 0) {
                        this.obj.onlinestatus = "1";
                        //url处理
                        // http://13.8.133.24:8080/video/22019515001324300103.m3u8
                        //http://13.8.133.24:8090/srs/video/22019519011324473164.m3u8
                        let vurl = data.videourl;//.replace("8080", "8090/srs");
                        console.log("vurl==" + vurl);
                        this.src = vurl;

                        this.initVideo();
                        //获取title信息

                    } else {
                        this.obj.onlinestatus = "0";
                        this.hls.destroy();
                    }
                }, (response) => {
                    console.log("出错了");
                    this.obj.onlinestatus = "0";
                    if(this.hls!=null){
                        this.hls.destroy();
                    }

                }).catch(function (response) {
                    console.log(response)
                    this.obj.onlinestatus = "0";
                    if(this.hls!=null){
                        this.hls.destroy();
                    }
                })
            }
        },
        mounted() {
            debugger
            if (this.channelid != "" && undefined != this.channelid) {
                this.init();
            }
            // else if (this.src != "" && undefined != this.src) {
            //     this.initVideo();
            // }
            console.log("channelid=" + this.channelid)
        },
        watch: {
            channelid: function () {
                if (this.channelid != "" && undefined != this.channelid) {
                    this.init();
                }
            }
            // src: val => {
            //     if (val != "" && undefined != val) {
            //         this.initVideo();
            //     }
            // }
        },beforeDestroy() {
            console.log("关闭视频流");
            if (this.channelid != "" && undefined != this.channelid) {
                debugger
                let url = api.vss_close_url.replace("{channelid}", this.channelid).replace("{type}", "1").replace("{videourltype}", "hls");
                this.$http.get(url).then((response) => {
                    var data = response.data;
                    if (data.errcode == 0) {
                        // if (this.hls != null) {
                        //     this.hls.destroy();
                        //     this.hls = null;
                        // }
                    }
                }, (response) => {
                    console.log("出错了");
                }).catch(function (response) {
                    console.log(response)
                });
            }
        }
    }
</script>

<style scoped>
    .bg {
        width: 100%;
        height: 100%;
    }

    .bg .video {
        /*height: 100%;*/
        width: 100%;
    }

    .bg .video video {
        width: 100%;
        /*height: calc(100% - 1.4rem);*/
        /*height:13.5em;*/
        object-fit:cover;
    }

    .info {
        position: relative;
        color: lightgreen;
        text-align: center;
        bottom: 0;
        font-size: 1.4rem;
        background: rgba(255, 255, 255, 0.2);
        padding:0.5em auto;
    }
</style>
