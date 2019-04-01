package com.tanrilla.lizard.service;

import com.tanrilla.lizard.model.Priority;
import com.tanrilla.lizard.repository.PriorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriorityServiceImpl implements PriorityService {

    @Autowired
    private PriorityRepository repository;

    @Override
    public List<Priority> findAll() {
        return repository.findAll();
    }

}
