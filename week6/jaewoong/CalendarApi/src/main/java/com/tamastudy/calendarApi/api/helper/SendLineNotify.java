package com.tamastudy.calendarApi.api.helper;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Component;

import okhttp3.FormBody;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

@Component
public class SendLineNotify {
	
    /**
     * doPost method
     * @param request
     * @return status
     * @throws IOException
     */
    public String doPost(String url, String encoding, Map<String, String> headers, String totalTime) throws IOException {

//        final okhttp3.MediaType mediaTypeJson = okhttp3.MediaType.parse("application/json; charset=" + encoding);

        final RequestBody requestBody = new FormBody.Builder()
        		.add("message", "총 업무 시간은" + totalTime + "시간 입니다")
        		.build();

        final Request request = new Request.Builder()
                .url(url)
                .headers(Headers.of(headers))
                .post(requestBody)
                .build();

        final OkHttpClient client = new OkHttpClient.Builder()
                .build();
        final Response response = client.newCall(request).execute();
        final String resultStr = response.body().string();

        return resultStr;
    }	
}
