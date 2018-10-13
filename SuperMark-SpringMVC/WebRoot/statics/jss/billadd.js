var billCode = null;
var productName = null;
var productUnit = null;
var productCount = null;
var totalPrice = null;
var providerId = null;
var addBtn = null;
var backBtn = null;


function priceReg (value){
	value = value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
		value = value.replace(/^\./g,"");  //验证第一个字符是数字而不是.
    value = value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的.
    value = value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");//去掉特殊符号￥
	if(value.indexOf(".")>0){
		value = value.substring(0,value.indexOf(".")+3);
	}
	return value;
}
$(function() {
billCode = $("#billCode");
productName = $("#productName");
productUnit = $("#productUnit");
productCount = $("#productCount");
totalPrice = $("#totalPrice");
providerId = $("#providerId");
addBtn = $("#add");
backBtn = $("#back");
//初始化的时候，要把所有的提示信息变为：* 以提示必填项，更灵活，不要写在页面上
billCode.next().html("*");
productName.next().html("*");
productUnit.next().html("*");
productCount.next().html("*");
totalPrice.next().html("*");
providerId.next().html("*");

billCode.on("blur",function(){
	validateTip(billCode.next(),{"color":"green"},imgYes+"已为你自动生成订单编号",true);
});
productName.on("focus",function(){
	validateTip(productName.next(),{"color":"#666666"},"* 请输入商品名称",false);
}).on("blur",function(){
	if(productName.val()!=null&&productName.val()!=""){
	validateTip(productName.next(),{"color":"green"},imgYes,true);
	}else{	
		validateTip(productName.next(),{"color":"red"},imgNo+"*商品名称不能为空，请重新输入",false);
	}
});
productUnit.on("focus",function(){
	validateTip(productUnit.next(),{"color":"#666666"},"* 请输入商品名称",false);
}).on("blur",function(){
	if(productUnit.val()!=null&&productUnit.val()!=""){
	validateTip(productUnit.next(),{"color":"green"},imgYes,true);
	}else{	
		validateTip(productUnit.next(),{"color":"red"},imgNo+"* 单位不能为空，请重新输入",false);
	}
});
productCount.on("focus",function(){
	validateTip(productCount.next(),{"color":"#666666"},"* 请输入大于0的正自然数，小数点后保留2位",false);
}).on("keyup",function(){
     this.value= priceReg (this.value);
}).on("blur",function(){
	if(productCount.val()!=null&&productCount.val()!=""){
		this.value= priceReg (this.value);	
		validateTip(productCount.next(),{"color":"#666666"},imgYes,true);
	}else{
		validateTip(productCount.next(),{"color":"red"},imgNo+"* 请输入大于0的正自然数，小数点后保留2位",false);
	}
})
totalPrice.on("focus",function(){
	validateTip(totalPrice.next(),{"color":"#666666"},"* 请输入大于0的正自然数，小数点后保留2位",false);
}).on("keyup",function(){
	this.value = priceReg(this.value);
}).on("blur",function(){
	if(totalPrice.val()!=null&&totalPrice.val()!=""){
		this.value= priceReg (this.value);	
		validateTip(totalPrice.next(),{"color":"#666666"},imgYes,true);
	}else{
		validateTip(totalPrice.next(),{"color":"red"},imgNo+"* 请输入大于0的正自然数，小数点后保留2位",false);
	}
});
   
providerId.on("focus",function(){
	validateTip(providerId.next(),{"color":"#666666"},"* 请选择供应商",false);
}).on("blur",function(){
	if(providerId.val() != null && providerId.val() != "" && providerId.val() != 0){
		validateTip(providerId.next(),{"color":"green"},imgYes,true);
	}else{
		validateTip(providerId.next(),{"color":"red"},imgNo+" 供应商不能为空，请选择",false);
	}
});
addBtn.on("click",function(){
	billCode.blur();
	 if(productName.attr("validateStatus") != "true"){
		productName.blur();
	}else if(productUnit.attr("validateStatus") != "true"){
		productUnit.blur();
	}else if(providerId.attr("validateStatus") != "true"){
		providerId.blur();
	}else{
		if(confirm("确认提交数据？")){
			$("#billForm").submit();
	     }
	}
})
})