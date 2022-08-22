package com.prodapt.MicroServiceLogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prodapt.MicroServiceLogin.Entity.Signup;

public interface SignupRepository extends JpaRepository<Signup, Integer>{

}
