package com.prodapt.MicroServiceLogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prodapt.MicroServiceLogin.Entity.Admin;


public interface AdminRepository extends JpaRepository<Admin, Integer>{

}
