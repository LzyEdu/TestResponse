var proCode = null;
var proName = null;
var proContact = null;
var proPhone = null;
var addBtn = null;
var backBtn = null;
var province10=null;
var city10=null;
var district10=null;;
var proFax=null;
var proDesc=null;

$(function(){
	proCode = $("#proCode");
	proName = $("#proName");
	proContact = $("#proContact");
	proPhone = $("#proPhone");
	addBtn = $("#add");
	backBtn = $("#back");
	province10=$("#province10");
	city10=$("#city10");
	district10=$("#district10");
	proFax=$("#proFax");
	proDesc=$("#proDesc");
	//初始化的时候，要把所有的提示信息变为：* 以提示必填项，更灵活，不要写在页面上
	proCode.next().html("*");
	proName.next().html("*");
	proContact.next().html("*");
	proPhone.next().html("*");
	proCode.on("blur",function(){
		var proname=/^[a-zA-Z\u4E00-\u9FA5_\-]{2,20}$/;
		if(proCode.val().match(proname)){
			validateTip(proCode.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(proCode.next(),{"color":"red"},imgNo+" 编码格式不正确，请重新输入",false);
		}
	}).on("focus",function(){
		//显示友情提示
		validateTip(proCode.next(),{"color":"#666666"},"* 请输入供应商编码",false);
	}).focus();
	
	proName.on("focus",function(){
		validateTip(proName.next(),{"color":"#666666"},"* 请输入供应商名称",false);
	}).on("blur",function(){
		var proname=/^[a-zA-Z\u4E00-\u9FA5_\-]{2,20}$/;
		if(proName.val().match(proname)){
			validateTip(proName.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(proName.next(),{"color":"red"},imgNo+"* 供应商名称格式不正确",false);
		}
		
	});
	
	proContact.on("focus",function(){
		validateTip(proContact.next(),{"color":"#666666"},"* 请输入联系人",false);
	}).on("blur",function(){
		var procontact=/^[a-zA-Z\u4E00-\u9FA5]{2,5}$/;
		if(proContact.val().match(procontact)){
			validateTip(proContact.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(proContact.next(),{"color":"red"},imgNo+"* 联系人格式不正确请重新输入",false);
		}
		
	});
	
	proPhone.on("focus",function(){
		validateTip(proPhone.next(),{"color":"#666666"},"* 请输入手机号",false);
	}).on("blur",function(){
		var patrn=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
		if(proPhone.val().match(patrn)){
			validateTip(proPhone.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(proPhone.next(),{"color":"red"},imgNo + "* 您输入的手机号格式不正确",false);
		}
	});
	province10.on("focus",function(){
		validateTip(province10.next(),{"color":"#666666"},"* 请选择详细",false);
	}).on("blur",function(){
		var useradd=/^[a-zA-Z\u4E00-\u9FA5_\-]{2,20}$/;
		if(province10.val().match(useradd)){
			validateTip(province10.next(),{"color":"green"},imgYes,true);	
		}else{
			validateTip(province10.next(),{"color":"red"},imgNo+"* 用户地址不符合规范，请重新选择",false);	
		}
	});
	city10.on("focus",function(){
		validateTip(city10.next(),{"color":"#666666"},"* 请选择详细",false);
	}).on("blur",function(){
		var useradd=/^[a-zA-Z\u4E00-\u9FA5_\-]{2,20}$/;
		if(city10.val().match(useradd)){
			validateTip(city10.next(),{"color":"green"},imgYes,true);	
		}else{
			validateTip(city10.next(),{"color":"red"},imgNo+"* 用户地址不符合规范，请重新选择",false);	
		}
	});
	district10.on("focus",function(){
		validateTip(district10.next(),{"color":"#666666"},"* 请选择详细",false);
	}).on("blur",function(){
		var useradd=/^[a-zA-Z\u4E00-\u9FA5_\-]{2,20}$/;
		if(district10.val().match(useradd)){
			validateTip(district10.next(),{"color":"green"},imgYes,true);	
		}else{
			validateTip(district10.next(),{"color":"red"},imgNo+"* 用户地址不符合规范，请重新选择",false);	
		}
	});
	proFax.on("blur",function(){
		var profax=/^[a-zA-Z0-9\u4E00-\u9FA5_\-\ ]{2,20}$/;
		if(proFax.val().match(profax)){
			validateTip(proFax.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(proFax.next(),{"color":"red"},imgNo + "* 您输入的传真你符合规范",false);
		}
	}).on("focus",function(){
		validateTip(proFax.next(),{"color":"#666666"},"* 请输入传真",false);
		
	});
	proDesc.on("blur",function(){
		var prodesc=/^[a-zA-Z0-9\u4E00-\u9FA5_\-\ ]{2,20}$/;
		if(proDesc.val().match(prodesc)){
			validateTip(proDesc.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(proDesc.next(),{"color":"red"},imgNo + "* 您输入的传真不符合规范",false);
		}
	}).on("focus",function(){
		validateTip(proDesc.next(),{"color":"#666666"},"* 请输入描述",false);
	});
	addBtn.bind("click",function(){
		if(proCode.attr("validateStatus") != "true"){
			proCode.blur();
		}else if(proName.attr("validateStatus") != "true"){
			proName.blur();
		}else if(proContact.attr("validateStatus") != "true"){
			proContact.blur();
		}else if(proPhone.attr("validateStatus") != "true"){
			proPhone.blur();
		}else{
			if(confirm("是否确认提交数据")){
				$("#providerForm").submit();
			}
		}
	});
});