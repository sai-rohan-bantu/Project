package com.example.demo.Services;

import com.example.demo.Repositories.UserRepository;
import com.example.demo.entity.Users;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userrepository;

    @Transactional
    public List<Users> getUsers()
    {
        List<Users> lst= userrepository.findAll();
        return lst;
    }

    @Transactional
    public void addUser(Users user)
    {
        userrepository.save(user);
    }

}
