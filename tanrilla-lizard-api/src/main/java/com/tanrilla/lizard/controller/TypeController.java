package com.tanrilla.lizard.controller;

import com.tanrilla.lizard.model.Type;
import com.tanrilla.lizard.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/type")
public class TypeController extends AbstractController {

    @Autowired
    private TypeService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Type> getAll(){
        return service.findAll();
    }

}
