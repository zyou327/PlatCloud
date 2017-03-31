var homebll = homebll || {};
homebll.getrealtimeinfobll = function (stationid, callback) {
    var params = {
        stationid: stationid,
        elements: 'stationId,Station_Name,DryBulTemp,MaxTemp,TimeMaxTemp,MinTemp,TimeMinTemp',
        times: '20170329110000'
    }
    homedal.getrealtimeinfodata(params, function (json) {
        if (typeof callback === "function") {
            //将数据进行转换

            //
            callback(json);
        }
    });
}
