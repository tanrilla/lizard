package com.tanrilla.lizard.controller;

import com.tanrilla.lizard.model.Project;
import com.tanrilla.lizard.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/project")
public class ProjectController extends AbstractController {

    @Autowired
    private ProjectService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Project> getAll(){
        return service.findAll();
    }

}
