package com.demo.taskmanager.repo;

import org.springframework.data.repository.CrudRepository;

import com.demo.taskmanager.model.Task;

public interface TaskRepository extends CrudRepository<Task, Integer> {

}

