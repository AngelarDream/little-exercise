/**
 * Created by Administrator on 2016/8/31.
 */
//�޷����JS
window.onload=function(){
    var oBox=document.getElementById('box');
    var oUl=oBox.getElementsByTagName('ul')[0];
    var aImg=oBox.getElementsByTagName('img');
    var aLi=oBox.getElementsByTagName('li');
    var count=1;  //����������
    oUl.appendChild(aLi[0].cloneNode(true));
    //innerHTML  ����һ�������ڵ�����
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