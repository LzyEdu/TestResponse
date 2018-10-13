package cn.smbms.controller;

import java.util.Date;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.List;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.sun.org.apache.bcel.internal.generic.GETSTATIC;
import com.sun.org.apache.regexp.internal.recompile;

import cn.smbms.pojo.Role;
import cn.smbms.pojo.User;
import cn.smbms.service.RoleService;
import cn.smbms.service.UserService;
import cn.smbms.util.Catart;
import cn.smbms.util.Page;

@Controller
@RequestMapping(value = "/user")
public class userController {
	@Resource(name = "userservice")
	private UserService userService;
	@Resource(name = "roleservice")
	private RoleService roleService;

	@RequestMapping(value = "/userlogin.html")
	public String getuserLogin(HttpServletRequest request, HttpSession session,
			@RequestParam String userCode, @RequestParam String userPassword) {
		User user = userService.getuserlogin(userCode, userPassword);
		if (user != null) {
			session.setAttribute(Catart.USER_SESSION, user);
			return "main";
		}
		request.setAttribute("error", "用户名或密码错误！");
		return "userLogin";
	}

	@RequestMapping(value = "/userlist.html")
	public String getuserList() {
		return "user/UserManagement";
	}
	
	@RequestMapping("/userdologin")
	public String userdologin(Model model){
		model.addAttribute("error","请先登录！");
		return "userLogin";
	}

	// redirect:
	@RequestMapping(value = "/userlist")
	@ResponseBody
	public String ajaxgetuserList(
			Model model,
			@RequestParam(value = "queryname", required = false) String queryname,
			@RequestParam(value = "queryUserRole", required = false) Integer queryUserRole,
			@RequestParam(value = "currPageNo", required = false) Integer currPageNo,
			@RequestParam(value = "action", required = false) String action,HttpServletRequest request,HttpServletResponse response) {
		/*
		 * try { queryname=new String(queryname.getBytes("ISO-8859-1"),"UTF-8");
		 * } catch (UnsupportedEncodingException e) { e.printStackTrace(); }
		 */
		Integer currpageSize = Catart.USER_CURRPAGESIZE;
		Integer sumCount = userService.getuserCount(queryname, queryUserRole);
		currPageNo = currPageNo != null ? Integer.valueOf(currPageNo) : 1;
		Page page = new Page(currPageNo, currpageSize, sumCount);
		List<User> users = userService.getuserList(queryname, queryUserRole,
				(currPageNo - 1) * currpageSize, currpageSize);
		List<Role> roles = roleService.getuserRolelist();
		model.addAttribute("roles", roles);
		model.addAttribute("users", users);
		model.addAttribute("page", page);
		model.addAttribute("queryname", queryname);
		model.addAttribute("queryUserRole", queryUserRole);
		return JSON.toJSONString(model);
	}
	@RequestMapping(value = "/userselect")
	public String getUserById(Model model,
			@RequestParam("userId") Integer userId) {
		User user = userService.getUserById(userId);
		model.addAttribute("user", user);
		return "user/UserView";
	}

	@RequestMapping(value = "/userAddisTtiaozhuan.html")
	public String douserAdd(Model model) {
		model.addAttribute("rolename", roleService.getuserRolelist());
		return "user/UserAddition";
	}

	@RequestMapping(value = "/isuserNull.json", method = RequestMethod.POST)
	@ResponseBody
	public Integer userisnot(@RequestParam("userCode") String userCode) {
		Integer isuserCode = null;
		int count = userService.userisnullCount(userCode);
		if (count > 0) {
			isuserCode = 1;
		} else if (count < 0) {
			isuserCode = 2;
		} else {
			isuserCode = 3;
		}
		return isuserCode;
	}

	/**
	 * @RequestParam(value="userCode") String userCode,
	 * @RequestParam(value="userName") String userName,
	 * @RequestParam(value="birthday") String birthday,
	 *                                 @RequestParam(value="phone") String
	 *                                 phone,
	 * @RequestParam(value="gender") Integer gender,
	 * @RequestParam(value="userRole") Integer userRole,
	 */
	@RequestMapping(value = "/insertUser")
	@ResponseBody
	public String userAdd(HttpServletRequest request,
			@RequestParam(value = "ruserPassword") String userPassword,
			@RequestParam(value = "province10") String province10,
			@RequestParam(value = "city10") String city10,
			@RequestParam(value = "district10") String district10, User user,
			Model model) {
		String address = province10 + city10 + district10;
		Integer createdBy = ((User) request.getSession().getAttribute(
				"usersession")).getId();
		user.setAddress(address);
		user.setCreatedBy(createdBy);
		user.setCreationDate(new Date());
		user.setUserPassword(userPassword);
		Integer sumCount = userService.getuserCount(null, null);
		Page page = new Page(1, Catart.USER_CURRPAGESIZE, sumCount);
		int currPageNo = page.getCurrpageCount();
		model.addAttribute("currPageNo", currPageNo);
		model.addAttribute("row", userService.insertUser(user));
		return JSON.toJSONString(model);
	}
	@RequestMapping(value="/updateUserTZ")
	public String getuserById(@RequestParam(value="userId")int userId,Model model){
	   User user = userService.getUserById(userId);
	   model.addAttribute("user",user);
	   model.addAttribute("userrole",roleService.getuserRolelist());
	   return "user/userUpdate";
	}
	@RequestMapping(value="/updataUser")
	@ResponseBody
	public int updateUser(User user,HttpServletRequest request){
		Integer moatedBy = ((User) request.getSession().getAttribute(
				"usersession")).getId();
		user.setModifyBy(moatedBy);
		user.setModifyDate(new Date());
		int row=userService.updateUser(user);
		return row;
	}
	
	@RequestMapping(value="/deleteuser")
	@ResponseBody
	public int deleteUserById(@RequestParam(value="userId")int userId){
		int row=userService.deleteUser(userId);
		return row;
	}
	
	
	@RequestMapping(value="/Bye")
	public String cs(HttpServletRequest request){
		request.getSession().removeAttribute(Catart.USER_SESSION);
		return "userLogin";
	}
}
