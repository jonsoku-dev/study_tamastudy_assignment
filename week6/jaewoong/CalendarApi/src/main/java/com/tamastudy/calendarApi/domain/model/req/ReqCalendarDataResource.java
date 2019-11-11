package com.tamastudy.calendarApi.domain.model.req;

import java.io.Serializable;

public class ReqCalendarDataResource implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
//	private String token;
	
	private String times;
	
	private String name;

	public String getTimes() {
		return times;
	}

	public void setTimes(String times) {
		this.times = times;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
