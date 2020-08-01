const api = {
    abbrUrl: abbrUrl,
    videoCount: videoCount,
    TDEarth: TDEarth,
    vss_url: vss_url,
    vss_close_url: vss_close_url,
    weather: "https://www.tianqiapi.com/api/?version=v6",//天气
    getOfflineStat: baseUrl + '/api/getOfflineStat', //离线设备统计
    getMainUnitAreaTypeStat: baseUrl + '/api/getMainUnitAreaTypeStat', //开发区重点场所分类
    getRecWZL: baseUrl + '/api/getRecWZL', //录像完整率
    getCamZXL: baseUrl + '/api/getCamZXL', //视频在线率
    getImgWZL: baseUrl + '/api/getImgWZL', //图像完整率
    getMainUnitStat: baseUrl + '/api/getMainUnitStat',
    getMainUnitTypeStat: baseUrl + '/api/getMainUnitTypeStat',
    getStations: baseUrl + '/api/getStations',
    getVideos: baseUrl + '/api/getVideos',
    getZWVideos: baseUrl + '/api/getZWVideos',//参数：String lng, String lat, String size 公里
    getMainUnit: baseUrl + '/api/getMainUnit',//keyword
    /**
     *    参数:type
     *     put("zsjj", "1");//住宿，交际
     put("xymr", "2");//洗浴美容
     put("whjl", "3");//体育娱乐
     put("tyyl", "4");//文化交流
     put("jzjt", "5");//就诊，交通
     put("whyl", "6");//文化娱乐
     */
    getMainUnitByType: baseUrl + '/api/getMainUnitByType'
}

export default api
