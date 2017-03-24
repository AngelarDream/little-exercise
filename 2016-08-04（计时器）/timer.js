/**
 * Created by Administrator on 2016/8/4.
 */
window.onload=function(){
    var btn= document.getElementsByTagName("input");
    console.log(btn);
    var timer=null;
    btn[0].onclick=function(){
        timer = setInterval(function(){
                alert("hello")}, 6000
        );
    }
    btn[1].onclick=function(){
        clearInterval(timer);
    }
}