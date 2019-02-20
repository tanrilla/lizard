package com.ckinan.controller;

import java.util.List;

import com.ckinan.model.Person;
import com.ckinan.service.BoilerplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class GreetingController {

    @Autowired
    private BoilerplateService boilerplateService;

    @GetMapping("/getPerson")
    public Person getPerson(@RequestParam(value="id") long id) {
        return boilerplateService.getPerson(id);
    }

    @GetMapping("/getAllPersons")
    public List<Person> getAllPersons() {
        return boilerplateService.getAllPersons();
    }

    @PutMapping("/createPerson")
    public Person createPerson(@RequestBody Person person) {
        return boilerplateService.createPerson(person);
    }

    @DeleteMapping("/deletePerson")
    public void deletePerson(@RequestParam(value="id") long id) {
        boilerplateService.deletePerson(id);
    }

    @PostMapping("/updatePerson")
    public Person updatePerson(@RequestBody Person person) {
        return boilerplateService.createPerson(person);
    }

}
