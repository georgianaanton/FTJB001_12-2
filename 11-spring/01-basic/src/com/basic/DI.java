package com.basic;

class Car{
	Engine e;
	Car(Engine e){
//		e = new Engine();
		this.e = e;
	}
	
}
class Engine{
	String name;
	public Engine(String name){
		this.name = name;
	}
}

public class DI {
	public static void main(String[] args) {
		Engine engine1 = new Engine("BMW_Engine");
		Engine engine2 = new Engine("Maruti_Engine");
		Car car = new Car(engine2);
		System.out.println(car.e);
	}
}
