package com.linkedin.demo.springboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linkedin.demo.springboot.entities.Role;
import com.linkedin.demo.springboot.repositories.RoleRepository;

@Service
public class RoleService {
	
	@Autowired
	RoleRepository roleRepository;
	
	// function to create a new role
	public Role createRole(Role role) {
        return roleRepository.save(role);
    }

	// function return a role by id or null in case it doesn't exist
    public Role getRoleByName(String id) {
        return roleRepository.findById(id).orElse(null);
    }

    // function that retrieve all roles from database
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }
    
    // function that update an existing role in database
    public Role updateRole(Role role) {
        return roleRepository.save(role);
    }

    // function that remove a role from database by it's id
    public void deleteRole(String roleName) {
    	roleRepository.deleteById(roleName);
    }
}
