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

import com.prodapt.MicroServiceLogin.Entity.Admin;
import com.prodapt.MicroServiceLogin.Repository.AdminRepository;



@RestController
@CrossOrigin
public class AdminController {
     @RequestMapping("/pro")
        String display()
        {
            System.out.println("Trying to explore API with SpringBoot");
            return "<marquee><h1>prodaptbatch24</h1></marquee>";

        }

        //create operation
         @Autowired
            private AdminRepository adminRepository;

            // get all employees
            @GetMapping("/getuser")
            public List<Admin> getAllUsers(){
                return adminRepository.findAll();
            }
            @PostMapping("/adduser")
            public Admin createadmin(@RequestBody Admin admin) {
                return adminRepository.save(admin);
            }

            // delete customer 
            @DeleteMapping("/deleteuser/{id}")
            public void deleteUser(@PathVariable("id") int id) {
            	adminRepository.deleteById(id);

            }
}