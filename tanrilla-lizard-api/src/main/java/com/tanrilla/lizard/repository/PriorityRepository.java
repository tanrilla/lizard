package com.tanrilla.lizard.repository;

import com.tanrilla.lizard.model.Priority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriorityRepository extends JpaRepository<Priority, Long> {
}
