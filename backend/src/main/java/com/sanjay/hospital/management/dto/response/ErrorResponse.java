package com.sanjay.hospital.management.dto.response;

import java.util.Map;

public class ErrorResponse {
    
    private String message;
    private String status;
    private Map<String, String> errors;

    public ErrorResponse(){

    }

    public String getMessage(){
        return message;
    }

    public void setMessage(String message){
        this.message = message;
    }

    public String getStatus(){
        return status;
    }

    public void setStatus(String status){
        this.status = status;
    }

    public Map<String, String> getErrors(){
        return errors;
    }

    public void setErrors(Map<String, String> errors){
        this.errors = errors;
    }
}
