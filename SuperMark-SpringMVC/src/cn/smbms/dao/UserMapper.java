package cn.smbms.dao;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import cn.smbms.pojo.User;

public interface UserMapper {
	/**
	 * 用户登录
	 * @param userCode
	 * @return
	 */
     User getuserlogin(@Param("userCode")String userCode);
     /**
      * 多条件查询
      * @param userName
      * @param userRole
      * @param currPageNo
      * @param currPageSize
      * @return
      */
     List<User> getuserList(@Param("userName")String userName,
    		                @Param("userRole")Integer userRole,
    		                @Param("currPageNo")Integer currPageNo,
    		                @Param("currPageSize")Integer currPageSize);
     /**
      * 获取用户总数
      * @param userName
      * @param userRole
      * @return
      */
     int getuserCount(@Param("userName")String userName,
             @Param("userRole")Integer userRole);
     /**
      * 根据id查询用户信息
      * @param userId
      * @return
      */
     User getUserById(Integer userId);
     /**
      * 根据帐号验证用户是否存在
      * @param userCode
      * @return
      */
     int userisnullCount(String userCode);
     /**
      * 添加用户	
      * @param user
      * @return
      */
     int insertUser(User user);
     /**
      * 修改用户
      * @param user
      * @return
      */
     int updateUser(User user);
     /**
      * 删除
      * @param userId
      * @return
      */
     int deleteUser(int userId);
}
