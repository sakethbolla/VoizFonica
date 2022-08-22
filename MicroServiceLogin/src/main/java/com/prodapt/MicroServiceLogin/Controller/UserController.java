package com.prodapt.MicroServiceLogin.Controller; 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prodapt.MicroServiceLogin.Entity.User;
import com.prodapt.MicroServiceLogin.Repository.UserRepository;



@RestController
@CrossOrigin
@RequestMapping("/login")
public class UserController {
     @RequestMapping("/project")
        String display()
        {
            System.out.println("Trying to explore API with SpringBoot");
            return "<marquee><h1>prodaptbatch24</h1></marquee>";

        }

        //create operation
         @Autowired
            private UserRepository userRepository;

            // get all employees
            @GetMapping("/getUser")
            public List<User> getAllUsers(){
                return userRepository.findAll();
            }
            @PostMapping("/addUser")
            public User createUser(@RequestBody User user) {
                return userRepository.save(user);
            }

            // delete customer 
            @DeleteMapping("/deleteUser/{id}")
            public void deleteUser(@PathVariable("id") int id) {
                   userRepository.deleteById(id);

            }
            @GetMapping("/updateUser/{uname}")
            public ResponseEntity<List<User>> customercheck(@PathVariable("uname") String uname) {
                List<User> ar = userRepository.findAll();
                for(User c: ar) {
                    System.out.println("User records are :"+c);
                    if(c.getUname()==uname) {
                        System.out.println("authorized to change");
                        c.setUname(uname);
                        userRepository.save(c);
                        System.out.println("After change:"+c);
                        break;
                    }else {
                        System.out.println("You are not authorized to change");
                    }

                }
                return ResponseEntity.ok(ar);

            }

}
