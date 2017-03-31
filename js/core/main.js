/**
 * Created by zyou on 16/9/4.
 */


$(function () {

    var menu = [
        {   name:"当前天气",
            icon:"dangqian",
            value:"",
            child:[
                {
                    name:"当前天气",
                    value:"",
                    child:[]
                }
            ]
        },


        {
            name:"实况观测",
            icon:"shikuang",
            value:"",
            child:[
                {
                    name:"10分钟降水",
                    value:"",
                    child:[]
                },
                {
                    name:"1小时降水",
                    value:"",
                    child:[]
                },
                {
                    name:"3小时降水",
                    value:"",
                    child:[]
                },
                {
                    name:"6小时降水",
                    value:"",
                    child:[]
                },
                {
                    name:"12小时降水",
                    value:"",
                    child:[]
                },
                {
                    name:"24小时降水",
                    value:"",
                    child:[]
                },
                {
                    name:"48小时降水",
                    value:"",
                    child:[]
                },
                {
                    name:"72小时降水",
                    value:"",
                    child:[]
                }
            ]
        },


        {   name:"精细化预报",
            icon:"yubao",
            value:"",
            child:
                [
                    {
                        name:"网格订正产品",
                        value:"",
                        child:[]
                    },
                    {
                        name:"雷达定量降水预测产品",
                        value:"",
                        child:[]
                    },
                    {
                        name:"快速更新同化ZJWARRS",
                        value:"",
                        child:[]
                    },
                    {
                        name:"短时预报",
                        value:"",
                        child:[]
                    },
                    {
                        name:"7天城镇报数据",
                        value:"",
                        child:[]
                    },
                    {
                        name:"乡镇精细化预报",
                        value:"",
                        child:[]
                    },
                    {
                        name:"生活指数",
                        value:"",
                        child:[]
                    }
                ]

        },


        {
            name:"服务产品",
            icon:'fuwu',
            value:"",
            child:[
                {
                    name:"雷电密度分析",
                    value:"",
                    child:[]
                },
                {
                    name:"精细化暴雨监测",
                    value:"",
                    child:[]
                },
                {
                    name:"精细化暴雨预报",
                    value:"",
                    child:[]
                },
                {
                    name:"山洪小流域风险预报",
                    value:"",
                    child:[]
                },
                {
                    name:"地质灾害风险预报",
                    value:"",
                    child:[]
                },
                {
                    name:"雷电灾害风险预报",
                    value:"",
                    child:[]
                }
            ]
        },


        {
            name:"雷 达",
            icon:'leida',
            value:"",
            child:[
                {
                    name:"雷达拼图",
                    value:"",
                    child:[]
                }
            ]
        },


        {
            name:"卫 星",
            icon:'weixing',
            value:"",
            child:[
                {
                    name:"风云2E三维云图",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2E水汽云图",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2E可见云图",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2E红外云图1",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2E红外云图2",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2E红外云图4",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2G三维云图",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2G水汽云图",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2G可见云图",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2G红外云图1",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2G红外云图2",
                    value:"",
                    child:[]
                },
                {
                    name:"风云2G红外云图4",
                    value:"",
                    child:[]
                }
            ]
        },
        {
            name:"台 风",
            icon:"taifeng",
            value:"",
            child:[]
        }
    ];

    var config = {
        class1:".navbar-right",
        class2:".menu_container"
    };

    var setMenu = function (menu,config) {

        var container = $(config.class1).empty();

        var menu2Container = $(config.class2).empty();

        var menu3Container ;

        var menu4Container ;


        $.each(menu,function (index,class1) {
            var menu1 = $("<li><img data-icon="+class1.icon+" src='./img/icon_"+class1.icon+".png'></img><a href='#' data-value="+class1.value+">"+class1.name+"</a></li> ");
            menu1.click(function () {
                var onShowItem = $(this).parent().find(".onShow").removeClass("onShow");
                onShowItem.find('a').removeClass("title-hover");
                var icon = onShowItem.find('img').data('icon');
                onShowItem.find('img').attr("src","./img/icon_"+icon+".png");
                $(this).addClass("onShow").find("img").attr("src","./img/icon_"+class1.icon+"_hover.png");
                child.parent("div").find(".onShow").removeClass("onShow");
                child.addClass("onShow");
            });
            var icon = menu1.find('img');
            var title = menu1.find("a");
            menu1.mouseenter(function () {
                if(!menu1.hasClass("onShow")){
                    icon.attr("src","./img/icon_"+class1.icon+"_hover.png");
                    title.addClass('title-hover');
                }
            });
            menu1.mouseleave(function () {
                if(!menu1.hasClass('onShow')){
                    title.removeClass('title-hover');
                    icon.attr("src","./img/icon_"+class1.icon+".png");
                }
            });
            container.append(menu1);


            var child = $("<ul class='nav nav-sidebar'></ul>");

            if(class1.child){
               $.each(class1.child,function (index,class2) {
                    child.append($("<li  href='#'><a data-value="+class2.value+">"+class2.name+"</a></li>"));
                });
                menu2Container.append(child);
            }
        })
    };
    setMenu(menu,config);

});

