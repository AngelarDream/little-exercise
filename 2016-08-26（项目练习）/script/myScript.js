/**
 * Created by Administrator on 2016/8/28.
 */
$(function(){
    //��������
    var $color = $(".skin li");
    $color.click(function(){
        var value = $(this).attr("title");//��ȡtitle������ֵ
        $("body").css("background",value)
    });
    //����Ч��
    var $nav = $(".nav>ul>li");
    $nav.hover(function(){
        $(this).find("ul").css("display","block");
    },function(){
        $(this).find("ul").css("display","none");
    });
    //������
    function scrollNew(obj){           //������������������
        var $self = obj.find("ul:first");
        var $lineHeight = $self.find("li:first").height();
        $self.animate({"marginTop":-$lineHeight+"px"},6000,function(){
            $self.css({marginTop:0}).find("li:first").appendTo($self);
        })
    }
    var $news = $("#news");
    //var scrollTime = null;
    $news.hover(function(){
        clearInterval(scrollTime)
    },function(){
        setInterval(function(){    //��ʱ������ʱ�����ù�������
            scrollNew($news);

        },3000);
    });

    var scrollTime = setInterval(function(){    //��ʱ������ʱ�����ù�������
        scrollNew($news);
    },3000);
});