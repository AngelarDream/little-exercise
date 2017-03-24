/**
 * Created by Administrator on 2016/7/30.
 */
$(function(){
    $btn=$(".btn02 input");
    //$img=$(".imgList");
    $img1=$(".lun02 li");
    var count=1;
    sport();
    for(var i=0;i<$btn.length;i++)
    {
        $btn.eq(i).attr({index:i});
    }
    for(var i=0;i<$btn.length;i++)
    {
        $btn.eq(i).click(function(){
            var p=$(this).index();
            //alert(p);
            count=p;
            for(var j=0;j<$btn.length;j++)
            {
                $btn.eq(j).removeClass("indexOne");
            }
            $(this).addClass("indexOne");
            // $img1=$img.animate({'left':-400*($(this).attr("index"))},600);
            $img1.eq(p).fadeIn(1000).siblings().fadeOut(1000);
        });
    }


    //定时器  图片自动播放
    var timer=null;
    function sport(){
        clearInterval(timer);

        timer=setInterval(function(){
            // $img.animate({'left':-400*count},1000);
            $btn.eq(count).trigger("click");
            count++;
            if(count>6)
            {
                count=0;
            }
        },3000);
    }
});

//不带按钮的轮播器
$(function () {
    $img= $('.lun03 li');
    var count=1;
    sport();
    var timer=null;
    function sport(){
        clearInterval(timer);
        timer=setInterval(function () {
            $img.eq(count).fadeIn(1000).siblings().fadeOut(1000);
            count++;
            if(count>6)
            {
                count=0;
            }
        },3000);
    }
});