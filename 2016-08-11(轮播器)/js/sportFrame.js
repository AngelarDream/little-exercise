
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
function cssStyle(obj,prop,value)
{
    //��������������ʱ��Ĺ����ǻ�ȡ�ö��������ֵ
    //��������������ʱ��Ĺ��������øö�������Ե�ֵ
    //arguments ���Ǳ��洫�ݲ���������
    if(arguments.length==2)
    {
        if(obj.currentStyle)
        {
            return obj.currentStyle[prop];  // IE �������ʹ��
        }
        else
        {
            return getComputedStyle(obj,false)[prop];  //FF  chrome �߰汾�������
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
