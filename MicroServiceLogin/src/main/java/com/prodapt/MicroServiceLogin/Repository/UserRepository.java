package com.prodapt.MicroServiceLogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prodapt.MicroServiceLogin.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}