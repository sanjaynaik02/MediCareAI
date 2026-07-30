package com.sanjay.hospital.management.controller;
// namespace that organises java class

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sanjay.hospital.management.dto.request.PatientRequest;
import com.sanjay.hospital.management.dto.response.TestResponse;
import com.sanjay.hospital.management.dto.response.PatientResponse;

@RestController
// This class handles REST API requests.
@RequestMapping("/api")
// base URL
public class TestController {

    @GetMapping("/test")
    // it tells spring Whenever a GET request comes to /api/test, execute the method below
    public ResponseEntity<TestResponse> test() {

        TestResponse response =
            new TestResponse(
                "Hospital Management Backend is working successfully",
                "Success"
            );
        // this creates new object in heap memory and returns it to the client as a JSON response   
        return ResponseEntity.ok(response);
    }

    @PostMapping("/patients")
    public ResponseEntity<PatientResponse> createPatient(
        @RequestBody PatientRequest request
) {

    System.out.println(request.getName());
    System.out.println(request.getAge());
    System.out.println(request.getEmail());
    System.out.println(request.getContactNumber());
    System.out.println(request.getGender());

    PatientResponse response =
            new PatientResponse(
                    "Patient created successfully",
                    "SUCCESS"
            );

    return ResponseEntity.ok(response);
}
}