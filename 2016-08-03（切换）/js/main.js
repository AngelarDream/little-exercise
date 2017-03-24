/**
 * Created by Administrator on 2016/8/3.
 */
window.onload=function()
{
    var tabs = document.getElementById("tabs");       //获取所有ID值为tab的元素
    var title = tabs.getElementsByTagName("ul")[0].getElementsByTagName("li");   //根据标签名ul.li获取title
    var news = tabs.getElementsByTagName("div");
    //获取标签名为div，并传给news
    for(var i=0;i<title.length;i++){
        //onclick事件发生时tab下所有class被清空并被重新赋值。
        title[i].index = i;                                       //自定义属性，保存title的下标索引值
        title[i].onclick = function(){                      //循环给title一个onclick事件
            for(var i=0;i<title.length;i++){                //定义一个onclic事件
                title[i].className = "";                       //所有的title 样式赋空
                news[i].className = "hide";              //先隐藏所有的class="hidden的"news样式display:none，不显示
            }
            this.className = "on";
            news[this.index].className = "";
        }
    }
};