/**
 * Created by Administrator on 2016/9/20 0020.
 */
//jquery库实现
$(function(){
    var $oMain = $(".main");
    var $oNav = $(".progress li");
    $oMain.first().show();
    $oNav.first().addClass("borderColor02");
    $(".main>button").each(function(index,domEle){
        $(domEle).click(function(){
            $oMain.hide().eq(index+1).show();
            $oNav.eq(index+1).css('borderBottomColor','#008000');
        });
    })
});