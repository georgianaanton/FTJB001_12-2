package com.demo.dto;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class Person implements InitializingBean, DisposableBean {
	private String name;
	private int age;
	private String address;
	
	public Person() {
		System.out.println("In perosn constructor");
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Person [name=" + name + ", age=" + age + ", address=" + address + "]";
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		System.out.println("After Property Set");
		if(this.age > 18) {
			// some logic
			System.out.println("age is lesser than 18");
		}
	}

	@Override
	public void destroy() throws Exception {
		System.out.println("Destroying bean"+this);
	}
	
	
	
	
}
