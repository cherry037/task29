window.onload=function(){
	var oLab=document.getElementById('lable');
	var oText=document.getElementById('text');
	var oBtn=document.getElementById('button');
	var oP=document.getElementById('p');
	oBtn.onclick=function(){
		var str=oText.value;
		if(str==''){
			oP.innerHTML='输入不能为空';
			oP.style.color='red';
		}
		var re1=/[\w]/g;
		var re2=/[\u4e00-\u9fa5]/g;
		var arr1=str.match(re1);
		var arr2=str.match(re2);
	    var num==arr1.length+(2*arr2.length);
	    if(num<=4&&num>=14){
	    	oP.innerHTML='格式正确';
			oP.style.color='green';
	    }
	    else{
	    	oP.innerHTML='格式不正确';
			oP.style.color='red';
	    }
	};
};