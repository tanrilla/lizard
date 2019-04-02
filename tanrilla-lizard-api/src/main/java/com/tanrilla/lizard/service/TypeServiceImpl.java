package com.tanrilla.lizard.service;

import com.tanrilla.lizard.model.Type;
import com.tanrilla.lizard.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeServiceImpl implements TypeService {

    @Autowired
    private TypeRepository repository;

    @Override
    public List<Type> findAll() {
        return repository.findAll();
    }

}
