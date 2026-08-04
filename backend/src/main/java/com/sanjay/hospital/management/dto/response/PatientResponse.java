package com.sanjay.hospital.management.dto.response;

public class PatientResponse {

    private String message;
    private String status;

    public PatientResponse() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}