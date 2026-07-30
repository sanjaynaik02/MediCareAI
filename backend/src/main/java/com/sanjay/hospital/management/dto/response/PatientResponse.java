package com.sanjay.hospital.management.dto.response;

public class PatientResponse {

    private String message;
    private String status;

    public PatientResponse(String message, String status) {
        this.message = message;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public String getStatus() {
        return status;
    }
}