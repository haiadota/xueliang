<template>
    <div class="box">
        <div class="search_input">
            <input type="text" v-model="keyWord" @keyup.enter="getData" @blur="show=false">
            <button @click="getData" @blur="show=false">搜索</button>
        </div>
        <ul class="list" v-show="show" @mousedown="btn($event)">
            <li class="cell" @click="selectItem(item)" :val="index"
                v-for="(item,index) in myData" :key="index" :class="{gray:index==now}">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "searchView",
        props: ['myData'],
        data() {
            return {
                show: false,
                keyWord: '',
                now: -1
            };
        },
        methods: {
            getData() {
                if (this.keyWord != 0) {
                    this.show = true
                    this.$emit('fun_search', this.keyWord)
                } else {
                    this.show = false
                }
            },
            selectItem(item) {
                if (item==null) {
                    return
                }
                this.keyWord = item.name
                this.show = false
                this.$emit('fun_select', item)
            },
            btn(e) {
                e.preventDefault()
            }
        }
    }
</script>

<style scoped>
    .box {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .search_input {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: .2rem;
        border: 0.06rem solid #00d0f4;
        border-right: none;
        font-size: 1rem;
        color: white;
        background: url("../assets/placeImg/ss.png") no-repeat 0.5rem center;
        background-size: 2rem 80%;
        outline: none;
        padding-left: 2.8rem;
        text-align: left;
        display: flex;
    }

    .search_input input {
        flex: 1;
        border: none;
        font-size: .9rem;
        color: white;
        background: none;
    }

    .search_input button {
        background-color: #00709c;
        width: 8rem;
        height: 102%;
        outline: none;
        font-size: 1.4rem;
        letter-spacing: .4rem;
        color: white;
        border: none;
        border-radius: 0 .15rem .15rem 0;
        cursor: pointer;
    }

    .box .list {
        width: 100%;
        height: 22rem;
        position: absolute;
        background-color: #0513327e;
        color: #fff;
        z-index: 99;
        font-size: 1rem;
        margin-top: 0.3rem;
        overflow-y: scroll;
    }

    .box .list::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .box .list .cell {
        padding: .3rem;
        border-bottom: #17519c 1px solid;
    }

    .box .list .cell:hover {
        background-color: #17519c;
    }
</style>
