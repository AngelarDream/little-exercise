/**
 * Created by Administrator on 2016/8/28.
 */
$(function(){
    //背景换肤
    var $color = $(".skin li");
    $color.click(function(){
        var value = $(this).attr("title");//获取title的属性值
        $("body").css("background",value)
    });
    //导航效果
    var $nav = $(".nav>ul>li");
    $nav.hover(function(){
        $(this).find("ul").css("display","block");
    },function(){
        $(this).find("ul").css("display","none");
    });
    //广告滚动
    function scrollNew(obj){           //定义新闻栏滚动方法
        var $self = obj.find("ul:first");
        var $lineHeight = $self.find("li:first").height();
        $self.animate({"marginTop":-$lineHeight+"px"},6000,function(){
            $self.css({marginTop:0}).find("li:first").appendTo($self);
        })
    }
    var $news = $("#news");
    //var scrollTime = null;
    $news.hover(function(){
        clearInterval(scrollTime)
    },function(){
        setInterval(function(){    //定时器开启时，调用滚动函数
            scrollNew($news);

        },3000);
    });

    var scrollTime = setInterval(function(){    //定时器开启时，调用滚动函数
        scrollNew($news);
    },3000);
});