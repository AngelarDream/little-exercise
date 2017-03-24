/**
 * Created by Administrator on 2016/9/19 0020.
 */

//原生JS实现
window.onload=function(){
    var oProgress = document.getElementsByClassName("progressBar");
    var oNav = oProgress[0].getElementsByTagName("div");
    var oMain = document.getElementsByClassName("main");
    var oBtn = document.getElementsByClassName("marginTop");
    var len = oNav.length;
    var timer = null;
    //初始化
    oNav[0].style.borderBottomColor="#008000";
    oMain[0].style.display="block";
    //点击时间
    for(var num=0;num<oBtn.length;num++){
        oBtn[num].index=num;
        oBtn[num].onclick=function(){
            var oInput = oMain[this.index].getElementsByTagName("input");
    //储存input的值
            var arr = [];
            for(var j=0;j<oInput.length;j++){
                if(oInput[j].value!==""){
                    arr.push(oInput[j].value);
                }
            }
    //判断是否为空
            if(arr.length==oInput.length){
                for(var i=0;i<len;i++){
                    oMain[i].style.display="none";
                }
                oNav[this.index+1].style.borderBottomColor="#008000";
                oMain[this.index+1].style.display="block";
            }
            else{
                alert("sorry!Your Information Is Incomplete");

            }
    //定时器返回首页
            if((this.index+1)==len-1){
                clearInterval(timer);
               timer=setInterval(function(){
                   for(var i=0;i<len;i++){
                       oNav[i].style.borderBottomColor="#999";
                       oMain[i].style.display="none";
                   }
                   oNav[0].style.borderBottomColor="#008000";
                   oMain[0].style.display="block";
               },5000)
            }
        };
    }
};