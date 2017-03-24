/**
 * Created by Administrator on 2016/8/31.
 */
//无缝滚动JS
window.onload=function(){
    var oBox=document.getElementById('box');
    var oUl=oBox.getElementsByTagName('ul')[0];
    var aImg=oBox.getElementsByTagName('img');
    var aLi=oBox.getElementsByTagName('li');
    var count=1;  //计数器变量
    oUl.appendChild(aLi[0].cloneNode(true));
    //innerHTML  代表一个对象内的内容
    oUl.style.width=aImg[0].offsetWidth*aImg.length+'px';
    setInterval(function(){
        oUl.style.left = oUl.offsetLeft - 10 + 'px';
        if(Math.abs(oUl.offsetLeft)%aImg[0].offsetWidth==0){

            oUl.style.left=0;
            oUl.removeChild(aLi[0]);
            oUl.appendChild(aLi[0].cloneNode(true));

        }
//                if(oUl.offsetLeft>0)
//                {
//                    oUl.style.left=-oUl.offsetWidth/2+'px';
//                }
//                else {
//                    oUl.style.left = oUl.offsetLeft + 10 + 'px';
//                }
    },30);
};