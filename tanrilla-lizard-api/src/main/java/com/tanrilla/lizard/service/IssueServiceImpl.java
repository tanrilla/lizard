package com.tanrilla.lizard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tanrilla.lizard.model.Issue;
import com.tanrilla.lizard.repository.IssueRepository;

@Service
public class IssueServiceImpl implements IssueService {

	@Autowired
	private IssueRepository repository;

	/* (non-Javadoc)
	 * @see com.tanrilla.lizard.service.e#create(com.tanrilla.lizard.model.Issue)
	 */
	@Override
	public void create(Issue objToSave){
		repository.save(objToSave);
	}

	/* (non-Javadoc)
	 * @see com.tanrilla.lizard.service.e#update(com.tanrilla.lizard.model.Issue)
	 */
	@Override
	public void update(Issue objToUpdate){
		repository.save(objToUpdate);
	}

	/* (non-Javadoc)
	 * @see com.tanrilla.lizard.service.e#delete(java.lang.Long)
	 */
	@Override
	public void delete(Long id){
		repository.deleteById(id);
	}

	/* (non-Javadoc)
	 * @see com.tanrilla.lizard.service.e#findByIdAndUserId(java.lang.Long, java.lang.Long)
	 */
	@Override
	public Issue findByIdAndUserId(Long id, Long userId){
		return repository.findByIdAndUserId(id, userId);
	}

	/* (non-Javadoc)
	 * @see com.tanrilla.lizard.service.e#findAllByUserId(java.lang.Long)
	 */
	@Override
	public List<Issue> findAllByUserId(Long id){
		return repository.findAllByUserId(id);
	}

}

