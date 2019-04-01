package com.tanrilla.lizard.controller;

import com.tanrilla.lizard.model.Priority;
import com.tanrilla.lizard.model.Type;
import com.tanrilla.lizard.service.PriorityService;
import com.tanrilla.lizard.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/priority")
public class PriorityController extends AbstractController {

    @Autowired
    private PriorityService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Priority> getAll(){
        return service.findAll();
    }

}
