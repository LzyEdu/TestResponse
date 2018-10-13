package cn.smbms.service.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.smbms.dao.RoleMapper;
import cn.smbms.pojo.Role;
import cn.smbms.service.RoleService;
@Service("roleservice")
public class RoleServiceImpl implements RoleService {
    @Resource
    private RoleMapper roleMapper;
	@Override
	public List<Role> getuserRolelist() {
		return roleMapper.getuserRolelist();
	}

}
