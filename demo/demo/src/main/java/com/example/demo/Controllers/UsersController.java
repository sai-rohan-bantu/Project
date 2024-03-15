package com.example.demo.Controllers;

import com.example.demo.Services.UserService;
import com.example.demo.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class UsersController {

    @Autowired
    private UserService userservice;

    @GetMapping("/users")
    public ResponseEntity<List<Users>> getUsers()
    {
        List<Users> lst=  userservice.getUsers();
        return new ResponseEntity<>(lst, HttpStatus.OK);
    }
    @PostMapping("/Add/users")
    public ResponseEntity<String> addUsers(@RequestBody Users user)
    {
        userservice.addUser(user);
        return new ResponseEntity<>("User Added", HttpStatus.OK);
    }

}
