
var  timer=null;
function sportFrame(obj,prop,end)
{
    clearInterval(timer);
    var speed=0;
    //随距离减小，速度也减小（缓冲运动）
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
        alert('参数不合理');

    }

}
function cssStyle(obj,prop,value)
{
    //传递两个参数的时候的功能是获取该对象的属性值
    //传递三个参数的时候的功能是设置该对象的属性的值
    //arguments 就是保存传递参数的数组
    if(arguments.length==2)
    {
        if(obj.currentStyle)
        {
            return obj.currentStyle[prop];  // IE 浏览器的使用
        }
        else
        {
            return getComputedStyle(obj,false)[prop];  //FF  chrome 高版本的浏览器
        }
    }
    else if(arguments.length==3)
    {
        obj.style[prop]=value+'px';
    }
    else
    {

    }
}
