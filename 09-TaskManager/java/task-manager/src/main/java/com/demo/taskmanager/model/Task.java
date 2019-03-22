package com.demo.taskmanager.model;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "tasks_table")
public class Task {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	@ManyToOne(cascade={CascadeType.ALL})
	@JoinColumn(name="parent_id")
	private Task parent_task;
	
	@OneToMany(mappedBy="parent_task", fetch = FetchType.LAZY)
	private Collection<Task> child_tasks = new HashSet<Task>();
	
	@NotBlank
    private String task;

//	yyyy-MM-dd
	@Column(nullable = false)
	private Date start_date;

	@Column(nullable = false)
	private Date end_date;

	@Column(nullable=false)
	@Min(0)
	@Max(30)
	private int priority;
	
	@Column(nullable=false)
	private boolean finished;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Task getParent_task() {
		return parent_task;
	}

	public void setParent_task(Task parent_task) {
		this.parent_task = parent_task;
	}

	public Collection<Task> getChild_tasks() {
		return child_tasks;
	}

	public void setChild_tasks(Collection<Task> child_tasks) {
		this.child_tasks = child_tasks;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public boolean isFinished() {
		return finished;
	}

	public void setFinished(boolean finished) {
		this.finished = finished;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", parent_task=" + parent_task + ", child_tasks=" + child_tasks + ", task=" + task
				+ ", start_date=" + start_date + ", end_date=" + end_date + ", priority=" + priority + ", finished="
				+ finished + "]";
	}
	
}
