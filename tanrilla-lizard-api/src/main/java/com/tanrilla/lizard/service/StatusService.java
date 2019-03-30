package com.tanrilla.lizard.service;

import java.util.List;

import com.tanrilla.lizard.model.Status;

public interface StatusService {

	Status getStatusById(Long id);

	List<Status> findAll();

}