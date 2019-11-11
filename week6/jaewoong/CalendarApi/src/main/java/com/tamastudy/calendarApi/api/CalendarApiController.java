package com.tamastudy.calendarApi.api;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tamastudy.calendarApi.api.helper.SendLineNotify;
import com.tamastudy.calendarApi.domain.common.constant.Constant;
import com.tamastudy.calendarApi.domain.model.CalendarDataDto;
import com.tamastudy.calendarApi.domain.model.req.ReqCalendarDataResource;
import com.tamastudy.calendarApi.domain.service.CalendarService;

@RestController
@RequestMapping("calendarApi")
public class CalendarApiController {
	
	private static final Logger logger = LoggerFactory.getLogger(CalendarApiController.class);
	
	private static final String LOGIN_TOKEN = "token";
	//line rest api
	private static final String LINE_API_ENDPOINT = "https://notify-api.line.me/api/notify";
	//encoding
	private static final String ENCODEING_TYPE = "UTF-8";
	//line token
	private static final String LINE_TOKEN = "LINE_TOKEN";
	
	@Autowired
	SendLineNotify sendLineNotify;
	
	@Autowired
	CalendarService calendarService;
			
    /**
     * Save startTimeData
     * @param request
     * @return status
     * @throws Exception
     */
	 @RequestMapping(value = "/startTimeSave", method = RequestMethod.POST)
	 @CrossOrigin
	 @ResponseStatus(HttpStatus.OK)
	 public ResponseEntity<String> getCalendarStartTimeSave (
			 @RequestBody ReqCalendarDataResource reqCalendarDataResource) throws Exception {
		 
		 logger.info("calendarStartTimeSave start");
		 
//       //TODO DB에서 토큰을 들고옴 -> TOKEN에 넣음
//       //token이 틀렸을 때, 401
		 
//       //TODO 1.time 발리데이션 체크 2.에러일 경우에 400
//       if (time == null) {
//       	return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
//       }
//       
//       //TODO start time save
//       try {
//       	calendarService.insertgetCalendarStartTime();
//       }catch (Exception e) {
//       	logger.error(Constant.REQ_SYSERROR_MSG, e);
//       }		 
		 
		 System.out.println(reqCalendarDataResource.getTimes());
		 
		 return new ResponseEntity<String>(HttpStatus.OK);
	 }
			 
    /**
     * Save finishTimeData
     * @param request
     * @return status
     * @throws Exception
     */
	@RequestMapping(value = "/finishTimeSave", method = RequestMethod.POST)
	@CrossOrigin
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> getCalendarFinishTimeSave (
    		@RequestBody ReqCalendarDataResource reqCalendarDataResource) throws Exception {

        logger.info("calendarFinishTimeSave start");
        
        //TODO DB에서 토큰을 들고옴 -> TOKEN에 넣음
        //token이 틀렸을 때, 401
        
        //TODO 1.time 발리데이션 체크 2.에러일 경우에 400
//        if (time == null) {
//        	return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
//        }
        
        //TODO start time save
        try {
        	calendarService.insertgetCalendarFinishTime();
        }catch (Exception e) {
        	logger.error(Constant.REQ_SYSERROR_MSG, e);
        }
        //전부 성공했을 때, 201
        return new ResponseEntity<String>(HttpStatus.OK);
    }    

    /**
     * lineNotify
     * @param request
     * @return status
     * @throws Exception
     */
    @GetMapping(value = "/lineNotify/api")
    public String getLineNotify() throws IOException {
    	
    	//TODO 디비에서 값 갖어옴 -> 끝난 시간 - 시작시간
    	String totalTime = "100";
    	
    	//request 헤더
    	final Map<String, String> httpHeaders = new LinkedHashMap<String, String>();
        httpHeaders.put("Authorization", "Bearer " + LINE_TOKEN);
        
        //line send
        String result = sendLineNotify.doPost(LINE_API_ENDPOINT, ENCODEING_TYPE, httpHeaders, totalTime);
    	
        return result;
    }
    
    /**
     * line message send
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/lineNotifyTest/api", method = RequestMethod.POST)
//    @ResponseStatus(HttpStatus.OK)
//    @GetMapping(value = "/lineNotifyTest/api")
    public ResponseEntity<String> getLineNotifyTest (@RequestBody ReqCalendarDataResource reqCalendarDataResource) throws Exception {
        
    	List<CalendarDataDto> calendarDataDtoList = new ArrayList<CalendarDataDto>();

        //TODO DB에서 토큰을 들고옴 -> TOKEN에 넣음
        //token이 틀렸을 때, 401
//        if (TOKEN.equals(reqCalendarDataResource.getToken()) == false) {
//            logger.error(Constant.REQ_TOKENERROR_MSG + "token : " + reqCalendarDataResource.getToken());
//            return new ResponseEntity<String>(HttpStatus.UNAUTHORIZED);
//        }
        
        //시간이 0일 때, 400
//        if (time == 0) {
//        	return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
//        }
        
    	//request 헤더
    	final Map<String, String> httpHeaders = new LinkedHashMap<String, String>();
        httpHeaders.put("Authorization", "Bearer " + LINE_TOKEN);
        
        //TODO 디비에서 값 갖어옴 -> 끝난 시간 - 시작시간
//    	String totalTime = reqCalendarDataResource.getData();
        String totalTime = "10";
        
        //line send
        String result = sendLineNotify.doPost(LINE_API_ENDPOINT, ENCODEING_TYPE, httpHeaders, totalTime);

        int succeedCnt = 0;

        //DB에 insert되었는지 확인
        if (succeedCnt == calendarDataDtoList.size()) {
            //전부 성공했을 때, 201
            return new ResponseEntity<String>(HttpStatus.CREATED);
        } else if (succeedCnt == 0) {
            //실패했을 때, 400
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }
        //일무 성공했을 때, 204
        return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
    }
}