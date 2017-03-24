// JavaScript Document
window.onload=function()
{
	imgLocation("container","box");	
	//json数组
	var dataSrc={"data":[{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"}]};
	//监听滚动事件
	window.onclick=function()
	{
		if(checkBox())
		{
			var cParent=document.getElementById("container");
			for(var i=0;i<dataSrc.data.length;i++)
			{
				var cContent=document.createElement("div");
				cContent.className="box";
				cParent.appendChild(cContent);
				var boxImg=document.createElement("div");
				boxImg.className="box_img";
				cContent.appendChild(boxImg);
				var img=document.createElement("img");
				img.src="picture/"+dataSrc.data[i].src;
				boxImg.appendChild(img);
				
			}
		}
		imgLocation("container","box");	
	}
	
}

//实现判断到什么时候开始滚动
function checkBox()
{
	var cParent=document.getElementById("container");
	var cContent=getChildElement(cParent,"box");
	var lastContentHeight=cContent[cContent.length-1].offsetTop;
	//scroll为未显示部分开始显示的像素
	var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
	//用来的到页面的高度
	var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
	if(lastContentHeight<scrolltop+pageHeight)
	{
		return true;	
	}
		
}

//获取容器内的所有内容取出
function imgLocation(parent,content)
{
	var cParent=document.getElementById(parent);
	var cContent=getChildElement(cParent,content);
	var imgWidth=cContent[0].offsetWidth;//一个图片的宽度
	var num=Math.floor(document.documentElement.clientWidth / imgWidth);
	//得到一行能放几个图片，document.documentElement.clientWidth得到页面的宽度
	cParent.style.cssText="width:"+imgWidth*num+"px;margin:0px auto";
	//csstext用来设置html的style属性值，设置cParent的宽度，和居中
	
	//瀑布流的特性：下一第一个图片添加在上一行高度最小的图片下面
	var boxHeightArr=[];
	for(var i=0;i<cContent.length;i++)
	{
		if(i<num)
		{
			boxHeightArr[i]=cContent[i].offsetHeight;	
		}else
		{
			var minHeight=Math.min.apply(null,boxHeightArr);//用来得到最小的高度
			var minIndex=getMinHeightLocation(boxHeightArr,minHeight);
			cContent[i].style.position="absolute";
			cContent[i].style.top=minHeight+"px";	
			cContent[i].style.left=cContent[minIndex].offsetLeft+'px';
			boxHeightArr[minIndex]=boxHeightArr[minIndex]+cContent[i].offsetHeight;
		}
	}
	
}
//得到最小高度的位置，返回值是下标
function getMinHeightLocation(boxHeightArr,minHeight)
{
	for(var i in boxHeightArr)
	{
		if(boxHeightArr[i]==minHeight)
		{
			return i;	
		}	
	}	
}
//得到所有内容
function getChildElement(parent,content)
{
	var contentArr=[];
	var allContent=parent.getElementsByTagName("*");
	for(var i=0;i<allContent.length;i++)
	{
		if(allContent[i].className==content)
		{
			contentArr.push(allContent[i]);	//向数组末尾进行追加
		}	
	}
	return contentArr;
}