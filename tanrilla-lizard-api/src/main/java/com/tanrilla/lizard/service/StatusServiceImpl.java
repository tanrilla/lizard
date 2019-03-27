package com.tanrilla.lizard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tanrilla.lizard.model.Status;
import com.tanrilla.lizard.repository.StatusRepository;

@Service
public class StatusServiceImpl implements StatusService {

	@Autowired
	private StatusRepository repository;

	@Override
	public Status getStatusById(Long id) {
		return repository.getOne(id);
	}

	@Override
	public List<Status> findAll() {
		return repository.findAll();
	}
}
