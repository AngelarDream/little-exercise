/**
 * Created by Administrator on 2016/8/31.
 */
//ÂÖ²¥JS
window.onload=function(){
    var oBox=document.getElementById('box');
    var oUl=oBox.getElementsByTagName('ul')[0];
    var aLi=oBox.getElementsByTagName('li');
    var aBtn=oBox.getElementsByTagName('button');
    var timer = null;
    var  len=aLi.length;
    var  count = 0;
    var m = 0;
    for(var i=0;i<len;i++)
    {
        aBtn[i].index=i;
        aBtn[i].onclick=function(){
            for(var i=0;i<aBtn.length;i++)
            {
                aBtn[i].className='';
            }
            aBtn[this.index].className='active';
            count=m=this.index;
            sportFrame(oUl,'left',-400*count);
        };

    }
    timer = setInterval(function(){
        if(count<len) {
            for(var i=0;i<len;i++)
            {
                aBtn[i].className='';
            }
            aBtn[count].className='active';
            sportFrame(oUl, 'left', -400 * count);
            count++;
            m++;

        }
        else{
            if(m>0){
                --m;
                for(var i=0;i<len;i++)
                {
                    aBtn[i].className='';
                }
                aBtn[m].className='active';
                sportFrame(oUl, 'left', -400 * m);
            }
            else{
                count=0;
                m=0;
            }
        }
    },1000);
};