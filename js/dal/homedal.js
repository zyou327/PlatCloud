var homedal = homedal || {};
homedal.getrealtimeinfodata = function (params, callback) {
    var url = config.url + config.home_awsdata_interface + "?stationid=" + params.stationid +
             "&elements=" + params.elements + "&times=" + params.times;
    //获取数据
    datahelper.ajaxCache(url, function (json) {
        if (typeof callback === "function") {
            callback(json);
        }
    });
}