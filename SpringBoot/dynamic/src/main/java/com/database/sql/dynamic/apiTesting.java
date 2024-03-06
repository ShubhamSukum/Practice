package com.database.sql.dynamic;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class apiTesting {

    @GetMapping("/hello")
    public static String Hello(){
        return "Hello World!! API testing!!!!!!!!!";
    }
}