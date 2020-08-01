<template>
    <div class="main">
        <img :src="weather_img" class="weather_img" :title="weather"/>
    </div>
</template>

<script>
    import api from "../api/index.js"

    export default {
        name: "weather",
        data() {
            return {
                weather_img: '',
                weather: ''
            }
        },
        methods: {
            initWeather() {
                this.$http.jsonp(api.weather, {
                    params: {
                        cityid: '101060101'
                    }
                }).then(function (response) {
                    //  console.log(response.data)
                    this.weather_img = require("../assets/weather/" + response.data.wea_img + ".png");
                    this.weather = response.data.wea;
                });
                // this.$http.get('http://localhost:8099/user/getOne').then((response) => {
                //     alert( response.data.msg)
                // },(response) => {
                //     console.log("出错了");
                // }).catch(function(response) {
                //     console.log(response)
                // })
            }
        },
        mounted() {
            this.initWeather();
        }
    }
</script>

<style scoped>
    .main{
        padding: 0 .5rem;
    }
    .weather_img {
        height: 1.9rem;
    }
</style>
