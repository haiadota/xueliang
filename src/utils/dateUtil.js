//时间
export function showTime(){
    var show_day=new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
    var time=new Date();
    var year=time.getUTCFullYear();
    var month=time.getMonth();
    var date=time.getDate();
    var day=time.getDay();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    var second=time.getSeconds();
    month<10?month='0'+month:month;
    month=month+1;
    hour<10?hour='0'+hour:hour;
    minutes<10?minutes='0'+minutes:minutes;
    second<10?second='0'+second:second;
    return year+'年'+month+'月'+date+'日'+' '+show_day[day-1]+' '+hour+':'+minutes+':'+second;
}
//日期
export function showDate(){
    var show_day=new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
    var time=new Date();
    var year=time.getUTCFullYear();
    var month=time.getMonth();
    var date=time.getDate();
    var day=time.getDay();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    var second=time.getSeconds();
    month=month+1;
    month<10?month='0'+month:month;
    date<10?date='0'+date:date;
    hour<10?hour='0'+hour:hour;
    minutes<10?minutes='0'+minutes:minutes;
    second<10?second='0'+second:second;
    return year+'年'+month+'月'+date+'日'+' '+show_day[day-1];
}
