package com.tanrilla.lizard.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tanrilla.lizard.security.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findById(long id);
    
    User findByUsername(String username);

}
