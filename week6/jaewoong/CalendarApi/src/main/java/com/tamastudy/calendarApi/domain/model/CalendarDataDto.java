package com.tamastudy.calendarApi.domain.model;

import java.io.Serializable;

import lombok.Data;

@Data
public class CalendarDataDto implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String token;
	
	private String calendar;
}
