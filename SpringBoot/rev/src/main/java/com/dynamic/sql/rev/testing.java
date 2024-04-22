package com.dynamic.sql.rev;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testing {
    @GetMapping("/test")
    public static String test(){
        return "Testing API successful 🌟";
    }
}
