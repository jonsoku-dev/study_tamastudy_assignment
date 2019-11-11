package com.tamastudy.calendarApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.tamastudy.calendarApi")
public class CalendarApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CalendarApiApplication.class, args);
	}
}
