package com.sanjay.hospital.management.controller;
// namespace that organises java class

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// annotation that belongs to spring need to be imported

import com.sanjay.hospital.management.dto.TestResponse;

@RestController
// This class handles REST API requests.
@RequestMapping("/api")
// base URL
public class TestController {

    @GetMapping("/test")
    // it tells spring Whenever a GET request comes to /api/test, execute the method below
    public TestResponse test() {
        
        // this creates new object in heap memory and returns it to the client as a JSON response
        return new TestResponse(
            "Hospitsl management backend is working successfully",
            "Success"
        );
    }
}