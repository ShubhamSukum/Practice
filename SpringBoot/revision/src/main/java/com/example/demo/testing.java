package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testing {
    @GetMapping("/hello")
    public static String hello(){
        return "Testing API Works!!";
    }
}
