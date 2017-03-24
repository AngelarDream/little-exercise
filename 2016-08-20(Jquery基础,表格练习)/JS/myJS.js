/**
 * Created by Administrator on 2016/8/20.
 */
//$(function(){
//    var $btn = $("input");
//    $btn.click(function(){
//        open_win();
//    })
//    function open_win(){
//        window.status="ÐÂµÄ×´Ì¬À¸ÄÚÈÝ";
//    }
//
//    });



$(function(){
    $("ul li:first").css("font-weight","bold");
    $("#button").click(function(){
        $("ul li").remove("li[title=t]");
        $("ul li:eq(1)").remove();
    })
})
