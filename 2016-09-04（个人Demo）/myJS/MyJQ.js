/**
 * Created by Administrator on 2016/8/31.
 */
//demo首页JQUERY
$(function(){
    var $nav = $(".nav>ul>li");
    $nav.hover(function(){
        $(this).css("opacity",1).find("ul").css("display","block");
    },function(){
        $(this).css("opacity",0.7).find("ul").css("display","none");
    });
});
//图片流水线淡入淡出
$(function(){
    timer = setInterval(function(){
        var $oImg  = $("img");
        $oImg.eq(0).animate({"opacity":0},1000).delay(2000)
            .animate({"opacity":1},4000);
        $oImg.eq(1).animate({"opacity":0},2000).delay(2000)
            .animate({"opacity":1},3000);
        $oImg.eq(2).animate({"opacity":0},3000).delay(2000)
            .animate({"opacity":1},2000);
        $oImg.eq(3).animate({"opacity":0},4000).delay(2000)
            .animate({"opacity":1},1000);
    }, 0);
})
