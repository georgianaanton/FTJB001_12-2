package com.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.demo.dto.Employee;

public class SpringTest {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("setup.xml");;
		
		((ConfigurableApplicationContext)context).registerShutdownHook();
		
		Employee emp = (Employee)context.getBean("emp");
		System.out.println(emp);
		Employee emp1 = (Employee)context.getBean("emp");
		System.out.println(emp1);
		
//		Address a = context.getBean("address", Address.class);
//		System.out.println(a);

		
	}
	
}
