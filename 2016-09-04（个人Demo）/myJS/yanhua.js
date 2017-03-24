/**
 * Created by Administrator on 2016/8/31.
 */
window.onload = function(){
//            创建div
    for(i=0;i<50;i++){
        var aDiv = document.createElement("div");
        document.body.appendChild(aDiv);
    }
//            获取div
    var Div = document.getElementsByTagName("div");
//            定义点击事件
    document.onclick = function(ev){
//               兼容性定义事件
        var oEvent = ev || event;
        for(i=0;i<Div.length;i++){
//              循环给每个div添加随机背景颜色
            Div[i].style.background='#'+Math.floor(Math.random()*16777215).toString(16);
//              给每个div添加运动事件，在运动函数中通过参数使左，上的距离等于doc的X,Y轴大小，改变，在运动中，链式运动添加方法
//                在上一个运动到达时，让所有div的上，左距离随机改变，逐渐消失
            sportFrame(Div[i],{left:oEvent.clientX,top:oEvent.clientY},function(){
                for(i=0;i<Div.length;i++){
                    sportFrame(Div[i],{top:Math.random()*600,left:Math.random()*1200,width:0,height:0})
                }
            });
//                   运动完成后初始化
            cssStyle(Div[i],'width',20);
            cssStyle(Div[i],'height',20);
            cssStyle(Div[i],'left',700);
            cssStyle(Div[i],'top',700);
        }
    };
};