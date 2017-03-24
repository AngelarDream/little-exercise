/**
 * Created by Administrator on 2016/10/2.
 */
var Angel = {
    styleSetGet:function(obj,prop,value) {
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

    },
    init:{
        timer:null,
        spend:0,
    },
    SportFrame:function(obj,prop,end){
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
        },
    SetInterval:function(){
        clearInterval(timer);
        timer=setInterval(SportFrame,30);
    },
}