/**
 * Created by Administrator on 2016/9/9.
 */
//$(function(){
//    var $Text = $(".product-list p");
//    $Text.each(function(){
//        this.click(function(){
//            Copy(this.text());
//        })
//    })
//});
window.onload=function(){
    //ʵ���ı��ɸ���
    var oProduct = document.getElementsByClassName("product-list");
    var oText = oProduct[0].getElementsByTagName('p');
    for(var j=0;j<oText.length;j++){
        oText[j].index = j;
        //alert(oText.length)
        oText[j].onclick = function(){
            Copy(oText[this.index].innerHTML);
        };
    }
    //ʵ���ֲ�
    //��ȡԪ��
    var oDiv = document.getElementById("scroll-group");
    var oBox = document.getElementsByClassName('ul-box');
    var oUl = oDiv.getElementsByTagName("ul");
    var oPre = oDiv.getElementsByClassName("pre");
    var oNext = oDiv.getElementsByClassName("next");
    for(var i=0;i<oPre.length;i++) {
        oPre[i].index = i;
        oPre[i].onclick = function () {
            var aLi = oUl[this.index].getElementsByTagName('li');
            oUl[this.index].appendChild(aLi[0].cloneNode(true));
            oUl[this.index].style.width = aLi[0].offsetWidth * (aLi.length)+ 'px';
            sportFrame(oUl[this.index], 'left', -(aLi[0].offsetWidth + 72));
            oUl[this.index].style.left = 0;
            oUl[this.index].removeChild(aLi[0]);
            aLi[0].className = 'margin';
            oUl[this.index].appendChild(aLi[0].cloneNode(true));
        };
    }


    for (var i = 0; i < oNext.length; i++) {
            oNext[i].index = i;
            oNext[i].onclick = function () {
                var aLi = oUl[this.index].getElementsByTagName('li');
                oUl[this.index].insertBefore(aLi[this.index].cloneNode(true), aLi[0]);
                oUl[this.index].style.width = aLi[0].offsetWidth * (aLi.length) + 160 + 'px';
                sportFrame(oUl[this.index], 'left', -(aLi[0].offsetWidth + 72));
                oUl[this.index].style.left = 0;
                oUl[this.index].removeChild(aLi[0]);
                aLi[0].className = 'margin';
                oUl[this.index].appendChild(aLi[0].cloneNode(true));
            }
        }

};
//��װ�˶����
function Copy(text){
    text.select(); // ѡ�����
    alert(1);
    document.execCommand("Copy"); // ִ���������������
    alert("�Ѹ��ƺã�����ճ��");
}
var  timer=null;
function sportFrame(obj,prop,end)
{
    clearInterval(timer);
    var speed=0;
    //������С���ٶ�Ҳ��С�������˶���
    timer=setInterval(function(){

        speed=(end-parseInt(styleSetGet(obj,prop)))/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(end==parseInt(styleSetGet(obj,prop)))
        {
            clearInterval(timer);
        }
        else
        {
            styleSetGet(obj,prop,parseInt(styleSetGet(obj,prop))+speed+'px');
        }
    },30);
}
function styleSetGet(obj,prop,value)
{
    if(arguments.length==2) {
        if (obj.currentStyle) {
            return obj.currentStyle[prop];
        }
        else {
            return getComputedStyle(obj, false)[prop];
        }
    }else if(arguments.length==3)
    {
        obj.style[prop]=value;
    }
    else
    {
        alert('����������');

    }

}
//Jqueryʵ��
//$(function(){
//    var $img = $("img");
////����ָ��
//    var count = 0;
//    var m = 4;
//    $img.css("opacity",0.6).eq(0).css("opacity",1);
//    $("#scroll-group.next").click(function(){
//        count++;
//        $img.each(function(){
//            $(this).css("opacity",0.6);
//            $(".head span").css("background-color","#ccc");
//        });
//        $img.eq(count).css("opacity",1);
//        $(".head span").eq(count).css("background-color","blue");
//        if(count==$img.length-1){
//            count = -1;
//        }
//    });
//    $(".pre").click(function(){
//        if(m==0){
//            m= 4;
//        }
//        m--;
//        $img.each(function(){
//            $(this).css("opacity",0.6);
//            $(".head span").css("background-color","#ccc");
//        });
//        $img.eq(m).css("opacity",1);
//        $(".head span").eq(m).css("background-color","blue");
//    })
//});

