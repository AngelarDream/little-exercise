/**
 * Created by Administrator on 2016/8/31.
 */
window.onload = function () {
    //ÇÐ»»¿¨
    var oLis = document.getElementsByClassName('lis1');
    var oNav = document.getElementsByClassName('nav');
    var oLi = oNav[0].getElementsByTagName('li');
    var oSpan =document.getElementsByTagName('span');
    for (var j = 0; j < oLi.length; j++) {
        oSpan[j].className = 'close';
        oLi[j].index = j;
        oLi[j].onclick = function () {
            for (var j = 0; j < oLi.length; j++) {
                oLis[j].style.display = 'none';
            }
            oLis[this.index].style.display = 'block';
        }
    }
    var oMain = document.getElementById('main');
    var oUl = oMain.getElementsByTagName('ul');
    for(var i=0;i<oSpan.length;i++){
        oSpan[i].index=i;
        oSpan[i].className = 'close';
        oSpan[i].onclick = function() {
            if (parseInt(styleSetGet(oUl[this.index], 'height')) == 0) {
                for (var i = 0; i < oSpan.length; i++){
                    oUl[i].style.height = 0;
                    oSpan[i].className = 'close';
                }
                oSpan[this.index].className = 'open';
                sportFrame(oUl[this.index], 'height', 60);
            }
            else{
                sportFrame(oUl[this.index],'height',0);
                oSpan[this.index].className = 'close';
            }
        }
    }
    var oTop = document.getElementsByClassName("top");
    var oSidebar = document.getElementsByClassName("sidebar");
    console.log(oTop);
    console.log(oSidebar);
    oTop.onclick = function(){
        sportFrame(oSidebar,'height',100);
    }
};