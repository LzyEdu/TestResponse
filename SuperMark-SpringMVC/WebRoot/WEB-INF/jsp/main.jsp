<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
<head>
<base href="<%=basePath%>">
<title>超市订单管理系统</title>
</head>
<body>
<%@ include file="/WEB-INF/jsp/common/left.jsp" %>
	<!--主体内容-->
	<input type="hidden" id="path" name="path" value="/SMBMS" /> <input
		type="hidden" id="referer" name="referer"
		value="http://localhost:8080" />
	 <div class="right">
		<img class="wColck" src="statics/images/clock.jpg" alt="" />
		<div class="wFont">
			<h2>${usersession.userName}</h2>
			<p>欢迎来到超市订单管理系统!</p>
		</div>
	</div>
	</section>
	<%@include file="/WEB-INF/jsp/common/footer.jsp" %>
</body>
</html>
