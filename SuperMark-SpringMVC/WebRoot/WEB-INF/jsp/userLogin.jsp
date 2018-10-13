<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
<head>
<base href="<%=basePath%>">
<title>系统登录 - 超市订单管理系统</title>
<!-- 导入CSS样式 -->
<link type="text/css" rel="stylesheet" href="statics/css/style.css" />
</head>
<body class="login_bg">
	<section class="loginBox"> <header class="loginHeader">
	<h1>超市订单管理系统</h1>
	</header> <section class="loginCont">
	<!-- name="actionForm"
		id="actionForm" -->
	<form class="loginForm" action="${pageContext.request.contextPath }/user/userlogin.html"  method="post">
		<div class="info">${requestScope.error}</div>
		<div class="inputbox">
			<label for="user">用户名：</label> <input type="text" class="input-text"
				id="userCode" name="userCode" value="${requestScope.userlogin }" placeholder="请输入用户名" required />
		</div>
		<div class="inputbox">
			<label for="mima">密码：</label> <input type="password"
				id="userPassword" name="userPassword" placeholder="请输入密码" required />
		</div>
		<div class="subBtn">

			<input type="submit" value="登录"/> <input type="reset" value="重置" />
		</div>
	</form>
	</section> </section>
</body>
</html>
