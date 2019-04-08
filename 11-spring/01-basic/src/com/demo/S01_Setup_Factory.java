package com.demo;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.FileSystemResource;

public class S01_Setup_Factory {
	public static void main(String[] args) {
//		Engine engine = new Engine("2015Engine");
		BeanFactory factory = new XmlBeanFactory(new FileSystemResource("D:\\Training\\FTJB001_12-2\\11-spring\\01-basic\\src\\01_setup.xml"));
		
//		Object obj = factory.getBean("maruti");
//		Engine engine = (Engine)obj;
		
		Engine engine = (Engine)factory.getBean("bmw");
		
		System.out.println(engine);
	}

}
