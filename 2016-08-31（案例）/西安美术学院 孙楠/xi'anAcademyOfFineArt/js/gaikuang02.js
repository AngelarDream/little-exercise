/**
 * Created by Administrator on 2016/8/2.
 */
window.onload=function(){
    //日期获取
    var mydate=new Date();
    var year=mydate.getFullYear();
    var month=mydate.getMonth()+1;
    var date=mydate.getDate();
    var week=mydate.getDay();
    if(week==0){week="日"}
    var time=document.getElementById('font01');
    time.innerHTML="XI'AN ACADEMY OF FINE ART"+' '+year+"年"+month+"月"+date+"日"+"星期"+week;


    //选项卡
    var Oul=document.getElementById('menu01');
    var abtn=Oul.getElementsByTagName('li');
    var aDiv=Oul.getElementsByTagName('div');
    for(var i=0;i<abtn.length;i++)
    {
        abtn[i].index=i;
        abtn[i].onmouseover=function()
        {
            for(var i=0;i<abtn.length;i++)
            {
                //abtn[i].className='';  //清空按钮所有的样式
                aDiv[i].style.display='none';
            }
            //this.className='active';//代表当前对象

            aDiv[this.index].style.display='block';	//怎么用一个对象控制另一个对象
        }

    }

    //轮播器
    var oLun=document.getElementById('lun22');
    var oUl=oLun.getElementsByTagName('ul')[0];
    var aImg=oUl.getElementsByTagName('img');
    var oBtn=document.getElementById('btn22');
    var aBtn=oBtn.getElementsByTagName('input');
//var leftBtn=document.getElementsByClassName('btn01')[0];
//var rightBtn=document.getElementsByClassName('btn02')[0];
    var timer1=null;


    var count=1;  //第一个指针
    var m=5;		 //第二个指针

//下面代码段的功能： 给数组aBtn的对象加索引，加点击事件，在事件处理程序中，先把所有的背景清除
// 在单独增加当前对象的背景，再调用运动框架
    for(var i=0;i<aBtn.length;i++)
    {
        aBtn[i].index=i;
        aBtn[i].onclick=function(){
            for(var i=0;i<aBtn.length;i++)
            {
                aBtn[i].className='';
            }
            aBtn[this.index].className='active';

            count=m=this.index;

            sport(oUl,'left',-this.index*cssStyle(aImg[0],'width'));
        };

    }


    cssStyle(oUl,'width',cssStyle(aImg[0],'width')*aImg.length);//扩大 ul宽度

    timer1=setInterval(function(){
        if(count<aImg.length)       //利用计数器让UL对象运动到相应的终点 运动的过程中 控制按钮的背景
        {

            for(var i=0;i<aBtn.length;i++)
            {
                aBtn[i].className='';
            }
            aBtn[count].className='active';
            sport(oUl,'left',-count*cssStyle(aImg[0],'width'));
            count++;
            m++;
        }
        else
        {
            if(m>0)      //利用计数器让UL对象运动到相应的终点 运动的过程中 控制按钮的
            {		--m;
                for(var i=0;i<aBtn.length;i++)
                {
                    aBtn[i].className='';
                }
                aBtn[m].className='active';
                sport(oUl,'left',(-m*cssStyle(aImg[0],'width')));
            }
            else
            {
                count=1;     // 计数器恢复
                m=5;
            }
        }

    },3000);

//按钮

};