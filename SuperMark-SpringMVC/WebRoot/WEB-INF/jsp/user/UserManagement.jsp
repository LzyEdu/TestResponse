<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<html>
<head>
<title>超市订单管理系统</title>
</head>
<body onload="userSE()">
	<%@include file="/WEB-INF/jsp/common/left.jsp"%>
	<input type="hidden" id="path" name="path" value="${pageContext.request.contextPath}"/>
	<div class="right">
		<div class="location">
			<strong>你现在所在的位置是:</strong> <span>用户管理页面</span>
		</div>
		<div class="search">
			<form method="post" action="">
				<input name="method" value="query" class="input-text" type="hidden">
				<span>用户名：</span> <input name="queryname" id="queryname"
					class="input-text" type="text" value="">
				<span>用户角色：</span> <select name="queryUserRole" id="queryUserRole">
				<option value='0' selected="selected">- - -请选择- - -</option>
				</select>
				 <input type="hidden" name="pageIndex" value="1" /> <input
					name="searchbutton" value="查 询" type="button" id="searchbutton" >
				<a href="userAddisTtiaozhuan.html">添加用户</a>
			</form>
		</div>
		<!--用户-->
		<table class="providerTable" cellpadding="0" cellspacing="0" id="xsyh">
			<tr class="firstTr">
				<th width="10%">用户编码</th>
				<th width="20%">用户名称</th>
				<th width="10%">性别</th>
				<th width="10%">年龄</th>
				<th width="10%">电话</th>
				<th width="10%">用户角色</th>
				<th width="30%">操作</th>
			</tr>
		</table>
		<div class="page-bar" id="lay_page" align="center" ></div>
	</div>
	</section>
	<%@include file="/WEB-INF/jsp/common/pagebar.jsp" %>
	<%@include file="/WEB-INF/jsp/common/footer.jsp"%>
<script type="text/javascript">
	function deleteuser(id,name){
		if(confirm("你确定要删除用户【"+name+"】吗？")){
			$.ajax({
				type:"post",
				url:"${ctx}/user/deleteuser",
				data:{"userId":id},
				dataType:"text",
				success:function(data){
					if(data>0 ){//删除成功：移除删除行
						alert("删除成功");
						 $("#"+id).remove();
						 userSE();
						// window.location.href="UserLoginServlet?isfrom=1&currPageNo=""
					}else if(data.delResult<=0){//删除失败
						alert("对不起，删除用户【"+name+"】失败");
					}else if(data.delResult == "notexist"){
						alert("对不起，用户【"+name+"】不存在");
					}
				},
				error:function(data){
					alert("对不起，删除失败");
				}
			});
	}
}; 	
</script>
