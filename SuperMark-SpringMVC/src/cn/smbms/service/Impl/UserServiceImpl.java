package cn.smbms.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.smbms.dao.UserMapper;
import cn.smbms.pojo.User;
import cn.smbms.service.UserService;
@Service(value="userservice")
public class UserServiceImpl implements UserService{
	@Resource
    private UserMapper userMapper;

	@Override
	public User getuserlogin(String userCode, String userPassword) {
		User user=userMapper.getuserlogin(userCode);
		if(user!=null){
			if(!user.getUserPassword().equals(userPassword)){
				user=null;
			}
		}
		return user;
	}

	@Override
	public List<User> getuserList(String userName, Integer userRole,
			Integer currPageNo, Integer currPageSize) {
		return userMapper.getuserList(userName, userRole, currPageNo, currPageSize);
	}

	@Override
	public int getuserCount(String userName, Integer userRole) {
		return userMapper.getuserCount(userName, userRole);
	}

	@Override
	public User getUserById(Integer userId) {
		return userMapper.getUserById(userId);
	}

	@Override
	public int userisnullCount(String userCode) {
		return userMapper.userisnullCount(userCode);
	}

	@Override
	public int insertUser(User user) {
		return userMapper.insertUser(user);
	}

	@Override
	public int updateUser(User user) {
		return userMapper.updateUser(user);
	}

	@Override
	public int deleteUser(int userId) {
		return userMapper.deleteUser(userId);
	}
}
