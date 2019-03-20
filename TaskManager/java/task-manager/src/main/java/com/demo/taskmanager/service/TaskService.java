package com.demo.taskmanager.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.demo.taskmanager.model.Task;
import com.demo.taskmanager.repo.TaskRepository;

@Service
public class TaskService {
	
	@Autowired
	TaskRepository taskRepository;
	
	public List<Task> getTasks(){
		List<Task> Tasks = new ArrayList<>();
		Iterable<Task> findAll = taskRepository.findAll();
//		findAll.forEach((Task) -> Tasks.add(Task));
		findAll.forEach(Tasks::add);
		return Tasks;
	}
	
//	public Task getTask(int id){
//		Optional<Task> findById = taskRepository.findById(id);
//		Task Task = findById.get();
//		return Task;
//	}
	
	// getTask by id
	public ResponseEntity<Task> getTask404Handler(int id){
		Optional<Task> optional = taskRepository.findById(id);
		if(optional.isPresent()){
			ResponseEntity<Task> responseEntity = ResponseEntity.status(HttpStatus.FOUND).body(optional.get());
			return responseEntity;
			
		} else {
			ResponseEntity<Task> response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return response;	
		}
	}
	
	public Task createTask(Task Task){
		return taskRepository.save(Task);
	}
	
	public Task editTask(int id, Task Task){
		Task.setId(id);
		return taskRepository.save(Task);
	}
	
	public void deleteTask(int id){
		taskRepository.deleteById(id);
	}
	
}
