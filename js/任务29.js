window.onload=function(){
	var oLab=document.getElementById('lable');
	var oText=document.getElementById('text');
	var oBtn=document.getElementById('button');
	var oP=document.getElementById('p');
	oBtn.onclick=function(){
		var str=oText.value;
		var num2=getNum(str);
		 if(num2>=4&&num2<=16){
	    	oP.innerHTML='格式正确';
			oP.style.color='green';
	    }else if(num2==0){
	    	oP.innerHTML='输入不能为空';
			oP.style.color='red';
	    }
	    else{
	    	oP.innerHTML='长度必须为4^16位';
			oP.style.color='red';
	    }
	};
};
function getNum(a){
	var num=0;
	for(var i=0;i<a.length;i++){
		if(a.charCodeAt(i)<=128){
				num+=1;
			}else{
				num+=2;
			}
	}
	return num;
}