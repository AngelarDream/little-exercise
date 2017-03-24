/**
 * Created by Administrator on 2016/8/31.
 */
window.onload= function(){
    var oWrap = document.getElementsByClassName("wrap")[0];
    var oImg = document.getElementsByTagName("img");
    var json2 = {'src':['images/enter_images/1.png','images/enter_images/2.png']};
    var json1 = {'src':['images/enter_images/1-over.png','images/enter_images/2-over.png']};
    for (var attr in json2) {
        for (var i = 0; i < json2[attr].length; i++) {
            oImg[i].src = json2[attr][i];
            oImg[i].index = i;
            oImg[i].onmousemove = function () {
                for (var attr in json1) {
                    for (var i = 0; i < json1[attr].length; i++) {
                        oImg[i].src = json2[attr][i];
                        oImg[this.index].src = json1[attr][this.index];
                    }
                }
            }
        }
    }

};