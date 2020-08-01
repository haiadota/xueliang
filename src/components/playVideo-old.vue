<template>
    <div class="bg">
        <div class="video">
            <video muted ref="videobox" poster="../assets/common/vbg.jpg"></video>
        </div>
        <div class="info">
            <span class="name">{{title}}</span>
            <span class="state">[{{statMsg}}]</span>
        </div>
    </div>
</template>

<script>
    import api from "../api/index.js"

    window.Hls = require('hls.js');
    export default {
        name: "playVideo",
        props: ["src", "channelid"],
        data() {
        },
        components: {},
        data() {
            return {
                statMsg: "在线",
                title: "XXX路口"
            }
        },
        methods: {
            initVideo() {
                let video = this.$refs.videobox;//document.getElementById('video');
                if (Hls.isSupported()) {
                    var hls = new Hls();
                    hls.loadSource(this.src);
                    hls.attachMedia(video);
                    hls.on(Hls.Events.MANIFEST_PARSED, function () {
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
                        this.statMsg = "在线";
                        //url处理
                        // http://13.8.133.24:8080/video/22019515001324300103.m3u8
                        //http://13.8.133.24:8090/srs/video/22019519011324473164.m3u8
                        let vurl = data.videourl.replace("8080", "8090/srs");
                        console.log("vurl==" + vurl);
                        this.src = vurl;

                        this.initVideo();
                        //获取title信息

                    } else {
                        this.statMsg = "异常";
                    }
                }, (response) => {
                    console.log("出错了");
                }).catch(function (response) {
                    console.log(response)
                })
            }
        },
        mounted() {
            // this.channelid='22019515001324300103';
            // this.src="http://13.8.133.24:8090/srs/video/22019515001324300103.m3u8";
            if (this.src != "" && undefined != this.src) {
                this.initVideo();
            } else {
                if (this.channelid != "" && undefined != this.channelid) {
                    this.init();
                }
            }
        },
        computed: {
            // playVideo:()=>{
            //     if(this.src!=""&&undefined!=this.src){
            //         this.initVideo();
            //     }else{
            //         if(this.channelid!=""&&undefined!=this.channelid){
            //             this.init();
            //         }
            //     }
            // }
        },
        watch: {
            channelid: val => {
                if (this.channelid != "" && undefined != this.channelid) {
                    this.init();
                }
            },
            src: val => {
                if (this.src != "" && undefined != this.src) {
                    this.initVideo();
                }
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
        width: 100%;
        height: 90%;
    }

    .bg .video video {
        width: 100%;
        height: 100%;
    }

    .info {
        height: 10%;
        position: relative;
        color: lightgreen;
        text-align: center;
        bottom: 0;
        font-size: 0.4rem;
        background: rgba(255, 255, 255, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
