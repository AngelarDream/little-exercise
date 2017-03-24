/**
 * Created by Administrator on 2016/7/28.
 */





window.onload=function()
{

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
var oLun=document.getElementById('lun');
var oUl=oLun.getElementsByTagName('ul')[0];
var aImg=oUl.getElementsByTagName('img');
var oBtn=document.getElementById('btn');
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


    //滚动条
    var oBox=document.getElementById('dang');
    var oDiv=document.getElementById('roll');
    var oDiv1=document.getElementById('content');

    oDiv.onmousedown=function(ev)  //滚动条
    {
        var oEvent=ev||event;
        //var px=0;
        var py=0;


        //px=oEvent.clientX-oDiv.offsetLeft;
        py=oEvent.clientY-oDiv.offsetTop;  //此处Y坐标-上边距


        document.onmousemove=function(ev)
        {
            var oEvent=ev||event;
            //var l=oEvent.clientX-px;
            var t=oEvent.clientY-py;


            /*if(l<0)
             {
             l=0;
             }
             else if(l>oBox.offsetWidth-oDiv.offsetWidth)
             {
             l=oBox.offsetWidth-oDiv.offsetWidth;
             }*/
            if(t<0)
            {
                t=0;
            }
            else if(t>oBox.offsetHeight-oDiv.offsetHeight)
            {
                t=oBox.offsetHeight-oDiv.offsetHeight;
            }
            //oDiv.style.left=l+'px';
            oDiv.style.top=t+'px';

            oDiv1.style.top=-t+'px';
        };
        document.onmouseup=function()
        {
            document.onmousemove=null;
            oDiv.onmouseup=null;
        };

    };

//无缝滚动左边

    var obox=document.getElementById('wufeng');
    var oul=obox.getElementsByTagName('ul')[0];
    var aimg=obox.getElementsByTagName('img');
    var timer=null;

    oul.innerHTML=oul.innerHTML+oul.innerHTML;
    oul.style.width=aimg[0].offsetWidth*aimg.length+'px';
    timer=setInterval(function () {

        if(oul.offsetLeft>-(oul.offsetWidth/2))   //左移
        {
            oul.style.left=oul.offsetLeft-2+'px';
        }
        else
        {
           oul.style.left='0px';
        }
    },30);

   oul.onmouseover= function () {
       clearInterval(timer);
   };

    oul.onmouseout= function () {
        timer=setInterval(function () {

            if(oul.offsetLeft>-(oul.offsetWidth/2))   //左移
            {
                oul.style.left=oul.offsetLeft-2+'px';
            }
            else
            {
                oul.style.left='0px';
            }
        },30);
    };


    //无缝滚动右边
    var obox01=document.getElementById('wufeng01');
    var oul01=obox01.getElementsByTagName('ul')[0];
    var aimg01=obox01.getElementsByTagName('img');
    var timer01=null;

    oul01.innerHTML=oul01.innerHTML+oul01.innerHTML;
    oul01.style.width=aimg[0].offsetWidth*aimg.length+'px';
    timer01=setInterval(function () {

        if(oul01.offsetLeft>-(oul01.offsetWidth/2))   //左移
        {
            oul01.style.left=oul01.offsetLeft-2+'px';
        }
        else
        {
            oul01.style.left='0px';
        }
    },30);

    oul01.onmouseover= function () {
        clearInterval(timer01);
    };

    oul01.onmouseout= function () {
        timer01=setInterval(function () {

            if(oul01.offsetLeft>-(oul01.offsetWidth/2))   //左移
            {
                oul01.style.left=oul01.offsetLeft-2+'px';
            }
            else
            {
                oul01.style.left='0px';
            }
        },30);
    };



};
