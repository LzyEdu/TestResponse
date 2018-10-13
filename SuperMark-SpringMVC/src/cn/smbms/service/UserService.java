package cn.smbms.service;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import cn.smbms.pojo.User;

public interface UserService {
    User getuserlogin(String userCode,String userPassword);
    
    List<User> getuserList(@Param("userName")String userName,
            @Param("userRole")Integer userRole,
            @Param("currPageNo")Integer currPageNo,
            @Param("currPageSize")Integer currPageSize);
    
    int getuserCount(@Param("userName")String userName,
            @Param("userRole")Integer userRole);
    
    User getUserById(Integer userId);
    
    int userisnullCount(String userCode);
    
    int insertUser(User user);
    
    int updateUser(User user);
    
    int deleteUser(int userId);
}
