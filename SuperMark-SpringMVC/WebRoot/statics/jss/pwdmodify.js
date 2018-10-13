var oldpassword = null;
var newpassword = null;
var rnewpassword = null;
var saveBtn = null;

$(function(){
	oldpassword = $("#oldpassword");
	newpassword = $("#newpassword");
	rnewpassword = $("#rnewpassword");
	saveBtn = $("#save");
	oldpassword.next().html("*");
	newpassword.next().html("*");
	rnewpassword.next().html("*");
	
	oldpassword.on("focus",function(){
		validateTip(oldpassword.next(),{"color":"#666666"},"* 请输入原密码",false);
	});
	oldpassword.on("blur",function(){
		$.ajax({
			type:"post",
			url:"UserLoginServlet?isfrom=8",
			data:{method:"pwdmodify",oldpassword:oldpassword.val()},
			dataType:"json",
			success:function(data){
				if(data==true){// 旧密码正确
					validateTip(oldpassword.next(),{"color":"green"},imgYes,true);
				}else if(data==false){// 旧密码输入不正确
					validateTip(oldpassword.next(),{"color":"red"},imgNo + " 原密码输入不正确",false);
				}else if(data == "sessionerror"){// 当前用户session过期，请重新登录
					validateTip(oldpassword.next(),{"color":"red"},imgNo + " 当前用户session过期，请重新登录",false);
				}else if(data == "error"){// 旧密码输入为空
					validateTip(oldpassword.next(),{"color":"red"},imgNo + " 请输入旧密码",false);
				}
			},
			error:function(data){
				// 请求出错
				validateTip(oldpassword.next(),{"color":"red"},imgNo + " 请求错误",false);
			}
		});
		newpassword.on("focus",function(){
			validateTip(newpassword.next(),{"color":"#666666"}, "* 密码长度必须是大于6小于20",false);
		}).on("blur",function(){
			if(newpassword.val()!=null && newpassword.val().length>6 && newpassword.val().length<=20){
				validateTip(newpassword.next(),{"color":"#666666"},imgYes,true);	
			}else{
				validateTip(newpassword.next(),{"color":"red"},imgNo+" 密码输入不符合规范，请重新输入",false);	
			}
		});
		rnewpassword.on("focus",function(){
			validateTip(rnewpassword.next(),{"color":"#666666"},"* 请输入与上面一致的密码",false);
		}).on("blur",function(){
			if(rnewpassword.val()!=null && rnewpassword.val().length>6 && rnewpassword.val().length<=20 && rnewpassword.val()==newpassword.val()){
				validateTip(rnewpassword.next(),{"color":"#666666"},imgYes,true);	
			}else{
				validateTip(rnewpassword.next(),{"color":"red"},imgNo+"两次密码输入不一致，请重新输入",false);	
			}
		});
		saveBtn.on("click",function(){
			if(oldpassword.attr("validateStatus") != "true"){
				oldpassword.blur();
			}else if(newpassword.attr("validateStatus") != "true"){
				newpassword.blur();
			}else if( rnewpassword.attr("validateStatus") != "true"){
				rnewpassword.blur();
			}else{
				if(confirm("确定要修改密码？")){
					$("#userForm").submit();
			}
			}
		});
	});
});