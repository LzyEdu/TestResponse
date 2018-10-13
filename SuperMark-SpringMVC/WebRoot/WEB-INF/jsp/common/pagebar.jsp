<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="ctx" />
<script> 
  function userSE(){
		 var params1;
		 var params2;
		 var params3;
		 //根据请求类型的不同进行相应的分页
		 <%String ctx = request.getContextPath();
			String action = request.getParameter("action");
			Integer currPageNo=request.getParameter("currPageNo")!=null?Integer.parseInt(request.getParameter("currPageNo")):1;
			String path = null;
			if (action.equals("userpagebar")||action.equals("insertUser")) {
				path = ctx + "/user/userlist.json";%>
				params1=$("#queryname").val();
				params2=$("#queryUserRole").val()==null?name:$("#queryUserRole").val()>0?$("#queryUserRole").val():0;
			<%} else if (action.equals("smbmspagebar")) {
				path = "/user/userlist.json";
			}%>
			//改变地址栏用于分页获取
			history.pushState(null, null,location.href.split("&")[0]+"&currPageNo="+<%=currPageNo%>+"");
		    $.ajax({
			  url:'<%=path%>?currPageNo='+<%=currPageNo%>+'&action=<%=action%>&queryname='+params1+'&queryUserRole='+params2,
			  type:"post",
			  cache:false, 
			  dataType:"JSON",
			  success:function(data){
			  $("#xsyh tr:gt(0)").hide(300, function(){ $(this).remove() });
			  setTimeout(function() { $("#xsyh").append(eachuser(data.users,data.roles,data));}, 300);
			laypage({
				cont : 'lay_page',
				pages :data.page.currpageCount, //总页数 $("#totalPageCount").val()    
				curr : function() { //通过url获取当前页，也可以同上（pages）方式获取    
					var page = location.search.match(/currPageNo=(\d+)/);
					return page ? page[1] : 1;
				}(),
				skin : '#c00', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00    
				groups : 5,//连续显示分页数    
				skip : true, //是否开启跳页    
				prev : '<', //若不显示，设置false即可    
        		next: '>', //若不显示，设置false即可    
				jump : function(e, first) { //触发分页后的回调    
					if (!first) { //一定要加此判断，否则初始时会无限刷新    
						$.ajax({
					    url:'<%=path%>?currPageNo=' + e.curr+'&action=<%=action%>&queryname='+params1+'&queryUserRole='+params2,
					    type:"post",
					    dataType:"json",
					     cache:false, 
					    success:function(data){
					    history.pushState(null, null, location.href.split("&")[0]+"&currPageNo="+data.page.currpageNo+"");
					        $("#xsyh tr:gt(0)").hide(300, function(){ $(this).remove()});
					        setTimeout(function() {
					         $("#xsyh").append(eachuser(data.users,data.roles,data));
					         }, 300);
							},
							error:function(data){
					        alert("查询时发生错误位置！！");
					         }
					        })
					    }
					}
				});
			  },
			  error:function(data){
			  alert("查询时出现错误呵呵呵！");
			  }
			  });
			  
				//用户拼接
			   function eachuser(data,data1,data2){
			   var str="";
	            $.each(data,function(index,val){
			   str+="<tr id='"+val.id+"'><td><span>"+val.userCode+"</span></td>"+
			   "<td><span>"+val.userName+"</span></td>"+
			   "<td><span>"+(val.gender==1?'男':'女')+"</span></td>"+
			   "<td><span>"+((new Date().getFullYear())-(new Date(parseInt(val.birthday)).getFullYear()))+"</span></td>"+
			   "<td><span>"+val.phone+"</span></td>"+
			   "<td><span>"+(val.userRole==1?'系统管理员':val.userRole==2?'经理':val.userRole==3?'普通员工':'无职位')+"</span></td>"+
			   "<td><span> <a id='viewUser' href='${ctx}/user/userselect.html?userId="+val.id+"&action=userpagebar&queryUserRole="+params2+"'> <img src='${ctx}/statics/images/read.png' alt='查看' title='查看' /> </a> </span>"+
			   "<span><a class='modifyUser' href='${ctx}/user/updateUserTZ?userId="+val.id+"'> <img src='${ctx}/statics/images/xiugai.png' alt='修改' title='修改' /> </a> </span>"+ 
			   "<span><a class='deleteUser' href=\"javascript:deleteuser("+val.id+",'"+(val.userName)+"')\"> <img src='${ctx}/statics/images/schu.png' alt='删除' title='删除' </a> </span></td></tr>";
	            });
	            
	            //填充下拉框	
	            var options="<option value='0'>" + "- - -请选择- - -" + "</option>";
	     	    $.each(data1,function(idx,val){
	     	    var option="<option value=" + val.id +">" + val.roleName + "</option>";
	     	    options=options+option;
	     	    })
				$("#queryUserRole").html(options);
				//填充用户搜索内容
				$("#queryname").val(data2.queryname);
				$("#queryUserRole").val(data2.queryUserRole);
	            return str;
	     	   };
	     	   																													
	     	   $("#searchbutton").off().on("click",function(){
	     	     history.pushState(null, null,location.href.split("&")[0]+"&currPageNo=1");
	     	     userSE();
	     	   });
}
	</script>