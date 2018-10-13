<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/common/left.jsp" %>
	<div class="right">
		<div class="location">
			<strong>你现在所在的位置是:</strong> <span>用户管理页面 >> 用户添加页面</span>
		</div>
		<div class="providerAdd">
			<form action="userAdd.html" method="post" id="userForm">
				<input type="hidden" name="method" value="add">
				<div>
					<label for="userCode">用户编码：</label> <input type="text"
						name="userCode" id="userCode" value="">
					<!-- 放置提示信息 -->
					<font color="red"></font>
				</div>
				<div>
					<label for="userName">用户名称：</label> <input type="text"
						name="userName" id="userName" value=""> <font color="red"></font>
				</div>
				<div>
					<label for="userPassword">用户密码：</label> <input type="password"
						name="userPassword" id="userPassword" value=""> <font
						color="red"></font>
				</div>
				<div>
					<label for="ruserPassword">确认密码：</label> <input type="password"
						name="ruserPassword" id="ruserPassword" value=""> <font
						color="red"></font>
				</div>
				<div>
					<label>用户性别：</label>
					 <select name="gender" id="gender">
						<option value="1" selected="selected">男</option>
						<option value="2">女</option>
					</select>
				</div>
				<div>
					<label for="birthday">出生日期：</label> <input type="text"
						Class="Wdate" id="birthday" name="birthday" readonly="readonly"
						onclick="WdatePicker();"> <font color="red"></font>
				</div>
				<div>
					<label for="phone">用户电话：</label> <input type="text" name="phone"
						id="phone" value=""> <font color="red"></font>
				</div>
					<!-- <label for="address">用户地址：</label> <input name="address"
						id="address" value=""> -->
			<div id="distpicker5">
        <div class="form-group">
          <label class="sr-only" for="province10">省    ：</label>
          <select class="form-control" name="province10" id="province10"></select>
          <font color="red"></font>
        </div>
        <div class="form-group">
          <label class="sr-only" for="city10">市    ：</label>
          <select class="form-control" name="city10" id="city10"></select>
          <font color="red"></font>
        </div>
        <div class="form-group">
          <label class="sr-only" for="district10">区    ：</label>
          <select class="form-control" name="district10" id="district10"></select>
          <font color="red"></font>
        </div>
				</div>
				<div>
					<label>用户角色：</label>
					<!-- 列出所有的角色分类 -->
					<select name="userRole" id="userRole">
						<option value="0">--请选择--</option>
						<c:forEach var="rolename" items="${rolename}" varStatus="status">
						<option value="${rolename.id}">${rolename.roleName }</option>
						</c:forEach>
					</select> <font color="red"></font>
				</div>
				<div class="providerAddBtn">
					<input type="button" name="add" id="add" value="保存"> <input
						type="button" id="back" name="back" value="返回"
						onclick="JavaScript:history.go(-1)">
				</div>
			</form>
		</div>
		<input type="hidden" value="${ctx}" id="path"/>
	</div>
	</section>
<%@include file="/WEB-INF/jsp/common/footer.jsp" %>
