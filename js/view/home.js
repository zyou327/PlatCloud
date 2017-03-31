var home = home || {};
//初始化
home.init = function (json) {
    if (json.returnCode >= 0) {
        $(".raw .temperature").html("<h4>" + json.DS[0].DryBulTemp + "℃</h4>");
        $(".raw .temperature1").html("<h4>" + json.DS[0].TimeMaxTemp + "℃</h4>");
    }
}
//加获取数据
home.loaddata = function (stationid) {
    homebll.getrealtimeinfobll(stationid, function (json) {
        //加载数据
        home.init(json);
    });

}
$(function () {
    
    //实况温度单击动作
    $(".raw").on("click", ".temperature", function () {
        home.loaddata('58457');
    });
   /* $(".raw").on("click", ".temperature", function () {
        home.loaddata();
    });
    $(".raw").on("click", ".temperature", function () {
        home.loaddata();
    });
    $(".raw").on("click", ".temperature", function () {
        home.loaddata();
    });
    $(".raw").on("click", ".temperature", function () {
        home.loaddata();
    });
    $(".raw").on("click", ".temperature", function () {
        home.loaddata();
    });
    $(".raw").on("click", ".temperature", function () {
        home.loaddata();
    });*/

});