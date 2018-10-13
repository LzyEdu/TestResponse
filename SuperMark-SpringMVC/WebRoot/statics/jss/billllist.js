
function openYesOrNoDLG(){
	$('.zhezhao').css('display', 'block');
	$('#removeBi').fadeIn();
}


function cancleBtn(){
	$('.zhezhao').css('display', 'none');
	$('#removeBi').fadeOut();
}
function getid(obj){
	alert(obj.attr(id));
}
$(".deleteBill").on("click",function(obj){
	alert(obj.id);
	/*openYesOrNoDLG();
	$('#no').click(function () {
		cancleBtn();
	});
	$('#yes').click(function () {
		deleteBill(billObj);
	});*/
});
/*function changeDLGContent(contentStr){
	var p = $(".removeMain").find("p");
	p.html(contentStr);
}*/
function deleteBill(obj){
	$.ajax({
		type:"post",
		url:path+"smbmsServlet?isfrom=2",
		data:{method:"delbill",billid:obj},
		dataType:"json",
		success:function(data){
			alert(data);
			if(data.delResult == true){//删除成功：移除删除行
				$("#"+obj).remove();
			}else if(data.delResult == false){//删除失败
				alert("对不起，删除订单【"+obj+"】失败");
/*				changeDLGContent("对不起，删除订单【"+obj+"】失败");
*/			}else if(data.delResult == "notexist"){
				alert("对不起，订单【"+obj+"】不存在");
/*				changeDLGContent("对不起，订单【"+obj+"】不存在");
*/			}
		},
		error:function(data){
			alert("对不起，删除失败");
		}
	});
}
