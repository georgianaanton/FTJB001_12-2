package com.demo.dto;

import org.springframework.beans.factory.DisposableBean;

public class Employee implements DisposableBean {
	private String name;
	private int age;
	private Address address;
	
	public Employee() {
		System.out.println("In emp constructor");
	}
	public Employee(Address address) {
		System.out.println("In emp param constructor");
		this.address = address;
	}
	
	public String getName() {
		System.out.println("in getter");
		return name;
	}
	public void setName(String name) {
		System.out.println("in setter");
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Employee [name=" + name + ", age=" + age + ", address=" + address + "]";
	}
	
	public void init() {
		System.out.println("in init");
	}

	@Override
	public void destroy() throws Exception {
		System.out.println("in employee dest method");
	}


}
