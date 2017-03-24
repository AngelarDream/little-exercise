/**
 * Created by Administrator on 2016/8/8.
 */
var container = $("#content");
var element = container.find(':first');
var slides = element.find("li");
var width = container.width();
var height = container.height();
element.css({
    width:(slides.length*width)+'px',
    height:height+'px'
});
$.each(slides,function(index){
    var slide = slides.eq(index);
    slide.css({
        width:width+'px',
        height:height+'px'
    });
});