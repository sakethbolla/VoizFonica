package com.prodapt.MicroServiceLogin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prodapt.MicroServiceLogin.Entity.Signup;
import com.prodapt.MicroServiceLogin.Repository.SignupRepository;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/signup")
public class SignupController {

        //create operation
         @Autowired
            private SignupRepository signupRepository;

            // get all employees
            @GetMapping("/getdata")
            public List<Signup> getAllUsers(){
                return signupRepository.findAll();
            }
            @PostMapping("/adddata")
            public Signup createsignup(@RequestBody Signup signup) {
                return signupRepository.save(signup);
            }
            
            // delete customer 
            @DeleteMapping("/deletedata/{id}")
            public void deleteUser(@PathVariable("id") int id) {
            	signupRepository.deleteById(id);

            }

            
}