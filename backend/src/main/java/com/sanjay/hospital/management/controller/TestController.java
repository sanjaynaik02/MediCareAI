package com.sanjay.hospital.management.controller;
// namespace that organises java class

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// annotation that belongs to spring need to be imported

@RestController
// This class handles REST API requests.
@RequestMapping("/api")
// base URL
public class TestController {

    @GetMapping("/test")
    // it tells spring Whenever a GET request comes to /api/test, execute the method below
    public String test() {
        return "Hospital Management Backend Running Successfully";
    }

}