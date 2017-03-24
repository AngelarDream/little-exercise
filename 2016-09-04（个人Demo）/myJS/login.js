/**
 * Created by Administrator on 2016/8/30.
 */
window.onload = function()
{
    var $wrap = document.getElementsByClassName("wrap");
    var aInput = document.getElementsByTagName("input");
    var username = aInput[0];
    var mail = aInput[1];
    var pwd = aInput[2];
    var pwd2 = aInput[3];
    var aSpan = document.getElementsByTagName("span");
    var username_msg = aSpan[0];
    var mail_msg = aSpan[1];
    var pwd_msg = aSpan[2];
    var pwd2_msg = aSpan[3];
    var register = document.getElementById("register");
    //匹配用户名的正则表达式，数字，字母，汉字
    //用户名
    //获得焦点时
    username.onfocus = function() {
        username_msg.style.display="inline-block";
        username.className = "font text";
        username_msg.innerHTML='6-25个字符,一个汉字为两个字符！';
    };
    //失去焦点时
    username.onblur = function(){
        //含有非法字符
        var re = /[^\w\u4e00-\u9fa5]/g;
        if(re.test(this.value)) {
            username_msg.innerHTML = '含有非法字符！';
            username.className = "error";
        }
        //不能为空
        else if(this.value==="") {
            username_msg.innerHTML = '不能为空！';
            username.className = "error";
        }
        else if((this.value).length < 6) {
            username_msg.innerHTML = '长度不能少于6个字符！';
            username.className = "error";
        }
        else {
            username_msg.innerHTML = 'OK';
            username.className = "font text";

        }
    };
    //邮箱
    mail.onfocus = function() {
        mail_msg.style.display = "inline-block";
        mail_msg.innerHTML = '请输入您的邮箱';
        mail.className = "font text";
    };
    mail.onblur = function()
    {
        //定义正则匹配
        var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(this.value === "") {
            mail_msg.innerHTML = '不能为空';
            mail.className = "error";
        }
        else if(!pattern.test(this.value)) {
            mail_msg.innerHTML = '邮箱格式不正确';
            mail.className = "error";
        }

        else {
            mail_msg.innerHTML = 'OK';
            mail.className = "font text";
        }
    };
    //密码
    pwd.onfocus = function()
    {
        pwd_msg.style.display = "inline-block";
        pwd_msg.innerHTML = '请设置你的密码';
        pwd.className = "font text";
    };
    pwd.onblur = function()
    {
        //全是数字正则匹配
        var re_n= /[^*\d]/g;
        //不能全为字母的正则匹配
        var re_t=/[^a-zA-Z]/g;
        if(this.value==="") {
            pwd_msg.innerHTML = '密码不能为空';
            pwd.className = "error";

        }
        else if(this.value.length<6||this.value.length>16) {
            pwd_msg.innerHTML = '长度应为6-16个字符';
            pwd.className = "error";
        }
        else if(!re_n.test(this.value)) {
            pwd_msg.innerHTML = '不能全为数字';
            pwd.className = "error";
        }
        else if(!re_t.test(this.value)) {
            pwd_msg.innerHTML = '不能全为字母';
            pwd.className = "error";
        }
        else {
            pwd_msg.innerHTML = 'OK';
            pwd.className = "font text";
        }
    };
    //两次密码是否相等
    pwd2.onfocus = function()
    {
        pwd2_msg.style.display = "inline-block";
        pwd2_msg.innerHTML = '请再次输入密码';
        pwd2.className ="font text" ;

    };
    pwd2.onblur = function()
    {
        if(this.value==="") {
            pwd2_msg.innerHTML = '密码不能为空';
            pwd2.className = "error";
        }

        else if (this.value != pwd.value) {
            pwd2_msg.innerHTML = '两次输入密码不一样';
            pwd2.className = "error";
        }
        else
        {
            pwd2_msg.innerHTML = 'OK';
            pwd2.className ="font text" ;

        }

    };
    //点击注册时的判断
    register.onclick = function() {
        if (username_msg.innerHTML =='OK'
            && mail_msg.innerHTML == 'OK'
            &&  pwd_msg.innerHTML =='OK'
            &&  pwd2_msg.innerHTML == 'OK')
        {
            alert("注册成功");
        }
        else
        {
            alert("请检查您的信息是否有误");
        }
    };


};