/**
 * Created by Administrator on 2016/8/31.
 */
window.onload = function(){
//            ����div
    for(i=0;i<50;i++){
        var aDiv = document.createElement("div");
        document.body.appendChild(aDiv);
    }
//            ��ȡdiv
    var Div = document.getElementsByTagName("div");
//            �������¼�
    document.onclick = function(ev){
//               �����Զ����¼�
        var oEvent = ev || event;
        for(i=0;i<Div.length;i++){
//              ѭ����ÿ��div������������ɫ
            Div[i].style.background='#'+Math.floor(Math.random()*16777215).toString(16);
//              ��ÿ��div����˶��¼������˶�������ͨ������ʹ���ϵľ������doc��X,Y���С���ı䣬���˶��У���ʽ�˶���ӷ���
//                ����һ���˶�����ʱ��������div���ϣ����������ı䣬����ʧ
            sportFrame(Div[i],{left:oEvent.clientX,top:oEvent.clientY},function(){
                for(i=0;i<Div.length;i++){
                    sportFrame(Div[i],{top:Math.random()*600,left:Math.random()*1200,width:0,height:0})
                }
            });
//                   �˶���ɺ��ʼ��
            cssStyle(Div[i],'width',20);
            cssStyle(Div[i],'height',20);
            cssStyle(Div[i],'left',700);
            cssStyle(Div[i],'top',700);
        }
    };
};