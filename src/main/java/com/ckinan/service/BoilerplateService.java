package com.ckinan.service;

import com.ckinan.model.Person;

import java.util.List;

public interface BoilerplateService {

    public Person getPerson(long id);

    public List<Person> getAllPersons();

    public Person createPerson(Person person);

    public void deletePerson(long id);

    public Person updatePerson(Person person);

}
