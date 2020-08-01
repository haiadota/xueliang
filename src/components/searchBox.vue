<template>
    <div ref="box" class="box">
        <div ref="search_input" class="search_input">
            <input type="text" v-model="t1" @keyup="get($event)" @keydown.down="changeDown()"
                   @keydown.up.prevent="changeUp()" @blur="showList=false">
            <button @click="getData" @keyup="
            " @blur="showList=false">搜索</button>
        </div>
        <div v-show="showList" :style="setStyle()" class="items" @mousedown="btn($event)">
            <ul>
                <li @click="selectItem" :val="index" v-for="(value,index) in myData" :key="index"
                    :class="{gray:index==now}">
                    {{value.name}}{{value.onlinestatus|formatOnlineStatus}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import api from "../api/index";

    export default {
        name: "searchBox",
        props: {
            fun_data: {
                type: Function,
                default: null
            }
        },
        filters:{
            formatOnlineStatus(val){
                if(undefined ==val || val==""){
                    return "";
                }
                switch (val) {
                    case '0':
                        return '[不在线]'
                    case '1':
                        return '[在线]'
                    case '4':
                        return '[未知]'
                    default:
                        return '[未接入]'
                }
            }
        },
        data() {
            return {
                myData: [],
                t1: "",
                now: -1,
                showList: false
            };
        },
        methods: {
            btn(e) {
                e.preventDefault()
            },
            get(ev) {
                // this.myData=[];
                // if(ev.keyCode==38 || ev.keyCode==40) { return;}
                if (ev.keyCode == 13) {
                    if(this.now==-1){
                        this.getData();
                    }else{
                        this.selectItem(ev)
                    }

                }
            },
            getData() {
                if (this.t1 == 0) {
                    this.showList = false;
                    this.now=-1;
                    return;
                }
                this.myData = [{name: "正在查询..."}]
                this.showList = true
                this.$http
                    .post(api.getVideos, {}, {params: {name: this.t1}})
                    .then(
                        function (res) {
                            if (Array.isArray(res.data.data) && res.data.data.length > 0) {
                                this.myData = res.data.data;
                            } else {
                                this.myData = [{name: "暂无数据"}];
                            }
                        },
                        function () {
                        }
                    );
            },
            changeDown() {
                this.now++;
                if (this.now == this.myData.length) this.now = -1;
                this.t1 = this.myData[this.now].name;
            },
            changeUp() {
                this.now--;
                if (this.now == -2) this.now = this.myData.length - 1;
                this.t1 = this.myData[this.now].name;
            },
            setStyle() {
                // console.log(this.$refs.search_input)
                let dom = document.getElementsByClassName("search_input")[0];
                let width = "20%";
                try {
                    width = dom.clientWidth;
                } catch (e) {
                }
                return "width:" + width + "px;";
            },
            selectItem(event) {
                debugger
                this.showList = false;
                var value = this.now;
                if(event.currentTarget.hasAttribute("val")){
                    value = event.currentTarget.getAttribute("val");
                }
                this.t1=this.myData[value].name;
                this.fun_data(this.myData[value]);
                this.now=-1;


            }
        }
    };
</script>

<style scoped>
    .box {
        padding: 0.5rem 0 0.3rem;
    }

    .search_input {
        width: 100%;
        height: 2.3rem;
        box-sizing: border-box;
        border-radius: .15rem;
        border: 0.05rem solid #00d0f4;
        font-size: 1.04rem;
        color: white;
        background: url("../assets/home/home_search.png") no-repeat 2.5% center;
        background-size: 5% 86%;
        padding-left: 9%;
        text-align: left;
    }

    .search_input input {
        width: 75%;
        height: 100%;
        box-sizing: border-box;
        border-radius: .15rem;
        border: none;
        font-size: 1.3rem;
        color: white;
        outline: none;
        background: none;
    }

    .search_input button {
        background-color: #00709c;
        width: 25%;
        height: 105%;
        font-size: 1.4rem;
        letter-spacing: 0.5rem;
        color: white;
        border: none;
        border-radius: .15rem;
        cursor: pointer;
    }

    .items {
        position: absolute;
        background-color: #22789a5c;
        z-index: 99;
        margin-top: 0.03rem;
        height: 40rem;
        overflow-y: scroll;
        font-size:10em;
    }

    .items::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

    .box ul {
        color: #fff;
        height: 0.08rem;
        font-size: 1.3rem;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .box ul li {
        padding: .3rem;
        border-bottom: #17519c 1px solid;
        cursor: pointer;
    }

    .box ul li:hover {
        background-color: #17519c;
    }
    .gray{
        background-color: #17519c;
    }
</style>
