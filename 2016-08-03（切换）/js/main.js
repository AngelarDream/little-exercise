/**
 * Created by Administrator on 2016/8/3.
 */
window.onload=function()
{
    var tabs = document.getElementById("tabs");       //��ȡ����IDֵΪtab��Ԫ��
    var title = tabs.getElementsByTagName("ul")[0].getElementsByTagName("li");   //���ݱ�ǩ��ul.li��ȡtitle
    var news = tabs.getElementsByTagName("div");
    //��ȡ��ǩ��Ϊdiv��������news
    for(var i=0;i<title.length;i++){
        //onclick�¼�����ʱtab������class����ղ������¸�ֵ��
        title[i].index = i;                                       //�Զ������ԣ�����title���±�����ֵ
        title[i].onclick = function(){                      //ѭ����titleһ��onclick�¼�
            for(var i=0;i<title.length;i++){                //����һ��onclic�¼�
                title[i].className = "";                       //���е�title ��ʽ����
                news[i].className = "hide";              //���������е�class="hidden��"news��ʽdisplay:none������ʾ
            }
            this.className = "on";
            news[this.index].className = "";
        }
    }
};