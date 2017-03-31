var datahelper = datahelper || {};
datahelper.ajaxCache = function (url, callback) {
    var url1 = url + "&userid=" + config.userid + "&pwd=" + config.pwd + "&dataformat=json&t=" + new Date().getTime()
    $.ajax({
        type: "GET",
        url: url + "&userid=" + config.userid + "&pwd=" + config.pwd + "&dataformat=json&t=" + new Date().getTime(),
        cache: true,
        dataType: "json",
        success: function (data) {
            callback(data)
        },

        error: function (msg) {
            alert(msg);
        }
    })
};
var datatype;
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
$.parseDate = function (dateStr, dateFormat) {
    var date = new Date();
    var o =
        {
            "y+": function (year) {
                date.setFullYear(year)
            },
            "M+": function (month) {
                date.setMonth(month - 1, 1)
            }, //month
            "d+": function (day) {
                date.setDate(day)
            },    //day
            "h+": function (hours) {
                date.setHours(hours)
            },   //hour
            "m+": function (minutes) {
                date.setMinutes(minutes)
            }, //minute
            "s+": function (seconds) {
                date.setSeconds(seconds)
            }, //second
            //			"q+" : Math.floor((this.getMonth()+3)/3),  //quarter
            "S": function (milliseconds) {
                date.setMilliseconds(milliseconds)
            } //millisecond
        };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(dateFormat)) {
            var s1 = RegExp.$1;
            var len = s1.length;
            var ind = dateFormat.indexOf(s1, 0);
            var num = dateStr.substr(ind, len);
            num = parseInt(num, 10);
            if (num != NaN) {
                o[k](num);
            }
            else {
                console.log("解析[" + s1 + "]错误!");
            }
        }
    }
    return date;
};
