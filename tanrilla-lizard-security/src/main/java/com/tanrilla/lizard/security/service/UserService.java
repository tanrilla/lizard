package com.tanrilla.lizard.security.service;

import java.util.List;

import com.tanrilla.lizard.security.model.User;

public interface UserService {

    public User getUser(long id);

    public List<User> getAllUsers();

    public User createUser(User user);

    public void deleteUser(long id);

    public User updateUser(User user);
    
    public User getUserByUsername(String username);

}
