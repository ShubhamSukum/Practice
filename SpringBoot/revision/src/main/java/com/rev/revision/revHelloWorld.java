package com.rev.revision;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class revHelloWorld {
    @GetMapping("/hello")
    public String[] HelloWorld(){
        String[] arr=new String[10];
        for(int i=0;i<10;i++){
            arr[i]=String.valueOf(i+1);
        }
        return arr;
    }
}
