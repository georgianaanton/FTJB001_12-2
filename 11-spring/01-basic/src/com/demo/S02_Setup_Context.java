package com.demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class S02_Setup_Context {
	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("02_setup.xml");
		
		Engine engine1 = (Engine)context.getBean("bmw");
		Engine engine2 = (Engine)context.getBean("bmw");
		
		System.out.println(engine1);
		System.out.println(engine2);
		
		if(engine1 == engine2) {
			System.out.println("Singleton");
		} else {
			System.out.println("Not Singleton");
		}
	}

}
