package com.ckinan.service;

import com.ckinan.model.Person;
import com.ckinan.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoilerplateServiceImpl implements BoilerplateService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public Person getPerson(long id) {
        return personRepository.findById(id);
    }

    @Override
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    @Override
    public Person createPerson(Person person) {
        return personRepository.save(person);
    }

    @Override
    public Person updatePerson(Person person) {
        return personRepository.save(person);
    }

    @Override
    public void deletePerson(long id) {
        personRepository.deleteById(id);
    }

}
