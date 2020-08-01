<template>
    <header>
        <div class="top_content">
            <div class="nav">
                <button v-for="(e,i) in titleArr" @click="nav_action(e.src)"
                        :class="{ selected:changeSelected == e.src}" :key="i">
                    {{e.name}}
                </button>
            </div>
            <div class="info">
                <light></light>
                <span class="date">{{dateStr}}</span>
            </div>
        </div>
    </header>
</template>

<script>
    import {showDate} from "../utils/dateUtil";
    import light from "./light"

    export default {
        name: "Header",
        components: {light},
        data() {
            return {
                titleArr: [
                    {name: '主页', src: 'home'},
                    {name: '监控运维', src: 'operation'},
                    {name: '案件统计', src: 'case'},
                    {name: '场所管控', src: 'place'},
                    {name: '户籍人口', src: 'people'},
                ],
                changeSelected: "home",
                dateStr: ""
            };
        },
        methods: {
            nav_action(value) {
                //设置选择按钮样式
                if (this.changeSelected != value) {
                    sessionStorage.setItem("currentPage", value)
                    this.changeSelected = value
                    if (value == 'home') {
                        document.getElementById("threeDEarth").className = 'earth_home'
                    } else if (value == 'place') {
                        document.getElementById("threeDEarth").className = 'earth_place'
                    } else {
                        document.getElementById("threeDEarth").className = 'earth_popular'
                    }
                    if (window.fanhui) {
                        window.fanhui()
                    }
                }
                this.$router.push({path: value})
            },
            handleEarthSize(value) {

            },
            initData() {
                this.dateStr = showDate();
            }
        },
        mounted() {
            this.initData()
            let currentPage = sessionStorage.getItem("currentPage")
            if (currentPage) {
                if (currentPage != 'home') {
                    this.changeSelected = currentPage
                    if(currentPage == 'place') {
                        document.getElementById("threeDEarth").className = 'earth_place'
                    } else {
                        document.getElementById("threeDEarth").className = 'earth_popular'
                    }
                }

            }

        }
    }
</script>

<style scoped>
    header {
        background: url("../assets/header/title.png") no-repeat center;
        background-size: cover;
        height: 5.9rem;
        box-sizing: border-box;
        position: relative;
    }

    .top_content {
        width: 100%;
        padding-top: 1.89rem;
        display: flex;
    }

    .nav {
        flex: 1;
        display: flex;
        text-align: left;
    }

    .nav button {
        height: 2.44rem;
        width: 12.1rem;
        border: none;
        font-size: 1.5rem;
        color: white;
        text-align: center;
        outline: none;
        background: none;
        cursor: pointer;
    }

    .nav button.selected {
        background: url("../assets/header/nav_selected.png") no-repeat top;
        background-size: cover;
        animation: nav_btn linear 2s 1.5s infinite;
        font-weight: bold;
    }

    .info {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 3.56rem;
    }

    .info .date {
        font-size: 1.14rem;
        color: white;
    }
</style>
