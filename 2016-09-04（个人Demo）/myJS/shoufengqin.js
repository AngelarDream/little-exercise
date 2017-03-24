/**
 * Created by Administrator on 2016/8/31.
 */
var timer=null;
window.onload=function()
{
    var oDiv=document.getElementById('box');
    var aDiv=oDiv.getElementsByTagName('div');
    var m=aDiv.length;
    var n=52;

    for(var i=0;i<m;i++) {
        aDiv[i].index = i;
        aDiv[i].onclick = function () {
            if (n == 52) {
                for (var j = m; j >= this.index; j--) {
                    sportFrame(timer, aDiv[j], 52);
                }
            } else if (n == 400) {
                for (var j = 0; j <= this.index; j++) {
                    sportFrame(timer, aDiv[j], 400);
                }
            }
            if (aDiv[this.index].offsetWidth == 52) {
                n = 400;
            }

            if (aDiv[this.index].offsetWidth == 400) {
                n = 52;
            }
        };
    }
};

function sportFrame(timer,obj,target)
{
    clearInterval(timer);
    var speed=0;
    timer=setInterval(function(){
        speed=(target-obj.offsetWidth)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(obj.offsetWidth==target)
        {
            clearInterval(timer);
        }
        else
        {
            obj.style.width=obj.offsetWidth+speed+'px';
        }

    },30);

}
