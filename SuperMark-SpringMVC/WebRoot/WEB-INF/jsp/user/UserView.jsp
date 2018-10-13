<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="/WEB-INF/jsp/common/left.jsp" %>
<%
Integer role=Integer.parseInt(request.getParameter("queryUserRole"));
 %>
<script>var name=<%=role%></script>
 <div class="right">
        <div class="location">
            <strong>你现在所在的位置是:</strong>
            <span>用户管理页面 >> 用户信息查看页面</span>
        </div>
        <div class="providerView">
            <p><strong>用户编号：</strong><span>${user.userCode }</span></p>
            <p><strong>用户名称：</strong><span>${user.userName }</span></p>
            <p><strong>用户性别：</strong>
            ${user.gender == 1 ?"<span> 女 </span>":"<span> 男 </span>"}
			</p>
            <p><strong>出生日期：</strong><span>${user.userName }</span></p>
            <p><strong>用户电话：</strong><span>${user.phone }</span></p>
            <p><strong>用户地址：</strong><span>${user.address }</span></p>
            <p><strong>用户角色：</strong><span>${user.role.roleName}</span></p>
			<div class="providerAddBtn">
            	<input type="button" id="back" name="back" value="返回" onclick="JavaScript:history.back()" >
            </div>
        </div>
    </div>
</section>
<%@ include file="/WEB-INF/jsp/common/footer.jsp" %>