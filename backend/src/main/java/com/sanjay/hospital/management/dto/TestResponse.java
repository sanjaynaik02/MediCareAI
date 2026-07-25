package com.sanjay.hospital.management.dto;

public class TestResponse {
    private String message;
    private String status;
    // These are instance variables (also called fields).

    public TestResponse(String message, String status) {
        this.message = message;
        this.status = status;
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
