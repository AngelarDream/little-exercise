/**
 * Created by Administrator on 2016/7/17.
 */
/**
 * Created by Administrator on 2016/5/20.
 */
window.onload = function() {
    var $tabs = document.getElementsByClassName("h");
    var title = document.getElementsByClassName("type");
    var content = document.getElementsByClassName("content");
    var len = title.length;
    for (var i = 0; i < len; i++) {
        title[i].index = i;
        title[i].onclick = function () {
            for (var i = 0; i < title.length; i++) {
                content[i].style.display = "none";
                content[this.index].style.display = "block";

            }
            ;

        }
    }
}
