package com.demo.taskmanager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.taskmanager.model.Task;
import com.demo.taskmanager.service.TaskService;

@RestController
@RequestMapping("/api/boot/v1")
@CrossOrigin
public class TaskController {

	@Autowired
	TaskService taskService;
	
//	@InitBinder
//	public void initBinder(WebDataBinder binder) {
//	    SimpleDateFormat dateFormat = new SimpleDateFormat("MM-dd-yyyy");
//	    dateFormat.setLenient(false);
//	    binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
//	}

	@GetMapping("/tasks")
	public List<Task> getTasks(){
		return taskService.getTasks();
	}
	
	@GetMapping("/tasks/{id}")
	public ResponseEntity<Task> getTask(@PathVariable int id){
		return taskService.getTask404Handler(id);
	}

	
	@PostMapping("/tasks")
	public Task addTask(@RequestBody Task task){
		System.out.println(task);
		return taskService.createTask(task);
	}
	
	@PutMapping("/tasks/{id}")
	public Task updateTask(@RequestBody Task task, @PathVariable int id){
		return taskService.editTask(id, task);
	}
	
	@DeleteMapping("/tasks/{id}")
	public void removeTask(@PathVariable int id){
		taskService.deleteTask(id);
	}

}
