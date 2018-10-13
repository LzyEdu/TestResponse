var userCode = null;
var userName = null;
var userPassword = null;
var ruserPassword = null;
var phone = null;
var birthday = null;
var userRole = null;
var addBtn = null;
var backBtn = null;
var province10=null;
var city10=null;
var district10=null;
var gender=null;
$(function(){
	userCode = $("#userCode");
	userName = $("#userName");
	userPassword = $("#userPassword");
	ruserPassword = $("#ruserPassword");
	phone = $("#phone");
	birthday = $("#birthday");
	userRole = $("#userRole");
	addBtn = $("#add");
	backBtn = $("#back");
	userAddress=$("#address");
	province10=$("#province10");
	city10=$("#city10");
	district10=$("#district10");
	gender=$("#gender");
	//初始化的时候，要把所有的提示信息变为：* 以提示必填项，更灵活，不要写在页面上
	userCode.next().html("*");
	userName.next().html("*");
	userPassword.next().html("*");
	ruserPassword.next().html("*");
	phone.next().html("*");
	birthday.next().html("*");
	userRole.next().html("*");
	var path=$("#path").val();
	//查询用户详细信息
	userCode.bind("blur",function(){
		var usercode=/^[a-zA-Z0-9]{4,10}$/;
		if(userCode.val().match(usercode)){
		$.ajax({
			type:"post",
			url:"isuserNull.json",
			data:{userCode:userCode.val()},
			dataType:"json",
			success:function(data){
				if(data == 2){
					validateTip(userCode.next(),{"color":"red"},imgNo+ "请输入用户帐号",false);
				}else if(data == 1){//账号已存在，错误提示
					validateTip(userCode.next(),{"color":"red"},imgNo+ " 该用户账号已存在",false);
				}else{//账号可用，正确提示	
					validateTip(userCode.next(),{"color":"green"},imgYes+" 该账号可以使用",true);
				}
			},
			error:function(data){//当访问时候，404，500 等非200的错误状态码
				validateTip(userCode.next(),{"color":"red"},imgNo+" 您访问的页面不存在",false);
			}
		});
		}else{
		 validateTip(userCode.next(),{"color":"red"},imgNo+" 用户编码输入的不符合规范，不能包含特殊符号并且位数大于4小于10",false);
		}
	}).bind("focus",function(){
		//显示友情提示
		validateTip(userCode.next(),{"color":"#666666"},"* 用户编码是您登录系统的账号,位数大于4且小于10",false);
	}).focus();
	
	userName.bind("focus",function(){
		validateTip(userName.next(),{"color":"#666666"},"* 用户名长度必须是大于1小于10的字符",false);
	}).bind("blur",function(){
		var username=/^[\u4E00-\u9FA5]{1,10}$/;
		if(userName.val().match(username)){
			validateTip(userName.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(userName.next(),{"color":"red"},imgNo+" 用户名只支持中文长度大于1且小于10",false);
		}	
		
	});
	
	userPassword.bind("focus",function(){
		validateTip(userPassword.next(),{"color":"#666666"},"* 密码长度必须是大于6小于20",false);
	}).bind("blur",function(){
		var pwd=/^[a-zA-Z0-9_\-\.]{6,20}$/;
		if(userPassword.val().match(pwd)){
			validateTip(userPassword.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(userPassword.next(),{"color":"red"},imgNo + " 密码输入不符合规范，只能包含特殊字符(下划线,点,横杠)",false);
		}
	});
	
	ruserPassword.bind("focus",function(){
		validateTip(ruserPassword.next(),{"color":"#666666"},"* 请输入与上面一只的密码",false);
	}).bind("blur",function(){
		if(ruserPassword.val() != null && ruserPassword.val().length > 6
				&& ruserPassword.val().length < 20 && userPassword.val() == ruserPassword.val()){
			validateTip(ruserPassword.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(ruserPassword.next(),{"color":"red"},imgNo + " 两次密码输入不一致，请重新输入",false);
		}
	});
	
	
	birthday.bind("focus",function(){
		validateTip(birthday.next(),{"color":"#666666"},"* 点击输入框，选择日期",false);
	}).bind("blur",function(){
		if(birthday.val() != null && birthday.val() != ""){
			validateTip(birthday.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(birthday.next(),{"color":"red"},imgNo + " 选择的日期不正确,请重新输入",false);
		}
	});
	
	phone.bind("focus",function(){
		validateTip(phone.next(),{"color":"#666666"},"* 请输入手机号",false);
	}).bind("blur",function(){
		var patrn=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
		if(phone.val().match(patrn)){
			validateTip(phone.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(phone.next(),{"color":"red"},imgNo + " 您输入的手机号格式不正确",false);
		}
	});
	
	userRole.bind("focus",function(){
		validateTip(userRole.next(),{"color":"#666666"},"* 请选择用户角色",false);
	}).bind("blur",function(){
		if(userRole.val() > 0){
			validateTip(userRole.next(),{"color":"green"},imgYes,true);
		}else{
			validateTip(userRole.next(),{"color":"red"},imgNo + " 请重新选择用户角色",false);
		}
	});
	province10.bind("focus",function(){
		validateTip(province10.next(),{"color":"#666666"},"* 请输入用户地址",false);
	}).bind("blur",function(){
		var useradd=/^[a-zA-Z\u4E00-\u9FA5_\-]{2,20}$/;
		if(province10.val().match(useradd)){
			validateTip(province10.next(),{"color":"green"},imgYes,true);	
		}else{
			validateTip(province10.next(),{"color":"red"},imgNo+"* 用户地址不符合规范，请重新选择",false);	
		}
	});
	city10.bind("focus",function(){
		validateTip(city10.next(),{"color":"#666666"},"* 请输入用户地址",false);
	}).bind("blur",function(){
		var useradd=/^[a-zA-Z\u4E00-\u9FA5_\-]{2,20}$/;
		if(city10.val().match(useradd)){
			validateTip(city10.next(),{"color":"green"},imgYes,true);	
		}else{
			validateTip(city10.next(),{"color":"red"},imgNo+"* 用户地址不符合规范，请重新选择",false);	
		}
	});
	district10.bind("focus",function(){
		validateTip(district10.next(),{"color":"#666666"},"* 请输入用户地址",false);
	}).bind("blur",function(){
		var useradd=/^[a-zA-Z\u4E00-\u9FA5_\-]{2,20}$/;
		if(district10.val().match(useradd)){
			validateTip(district10.next(),{"color":"green"},imgYes,true);	
		}else{
			validateTip(district10.next(),{"color":"red"},imgNo+"* 用户地址不符合规范，请重新选择",false);	
		}
	});
	addBtn.bind("click",function(){
		if(userCode.attr("validateStatus") != "true"){
			userCode.focus();
			userCode.blur();
		}else if(userName.attr("validateStatus") != "true"){
			userName.blur();
		}else if(userPassword.attr("validateStatus") != "true"){
			userPassword.blur();
		}else if(ruserPassword.attr("validateStatus") != "true"){
			ruserPassword.blur();
		}else if(birthday.attr("validateStatus") != "true"){
			birthday.blur();
		}else if(phone.attr("validateStatus") != "true"){
			phone.blur();
		}else if(userRole.attr("validateStatus") != "true"){
			userRole.blur();
		}else if(province10.attr("validateStatus")!="true"){
			province10.blur();
		}else if(city10.attr("validateStatus")!="true"){
			city10.blur();
		}else if(district10.attr("validateStatus")!="true"){
			district10.blur();
		 }else{
			 if(confirm("是否提交数据？")){
				 userAdd();
			 }else{
				 alert("提交失败");
			 }
		}
	});
	function userAdd() {
		$.ajax({
			url:path+"/user/insertUser.json",
			type:"post",
			data:{"userCode":userCode.val(),"userName":userName.val(),"ruserPassword":ruserPassword.val(),"birthday":birthday.val(),"phone":phone.val(),
				"userRole":userRole.val(),"province10":province10.val(),"city10":city10.val(),"district10":district10.val(),"gender":gender.val()},
			dataType:"json",
			success:function(data){
				if(data.row>=1){
					alert("添加用户【  "+userName.val()+" 】成功！");
					window.location.href=path+"/user/userlist.html?action=insertUser&currPageNo=1";
				}else{
					alert("添加出现错误!!");
				}
			},
			error:function(data){
				alert("添加出现错误！");
			}
		});
	}
});