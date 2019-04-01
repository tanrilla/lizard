package com.tanrilla.lizard.service;

import com.tanrilla.lizard.model.Project;
import com.tanrilla.lizard.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository repository;

    @Override
    public List<Project> findAll() {
        return repository.findAll();
    }
    
    @Override
	public void create(Project project){
		repository.save(project);
	}

    @Override
	public void update(Project project){
		repository.save(project);
	}

    @Override
	public void delete(Long id){
		repository.deleteById(id);
	}

    @Override
	public Project findByIdAndUserId(Long id, Long userId){
		return repository.findByIdAndCreatedBy(id, userId);
	}

    @Override
	public List<Project> findAllByUserId(Long id){
		return repository.findAllByCreatedBy(id);
	}
}
