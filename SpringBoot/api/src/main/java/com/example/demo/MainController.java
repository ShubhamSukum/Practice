package com.example.demo;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/demo")
public class MainController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Users> all(){
        return userRepository.findAll();
    }

    @PostMapping(path = "/add")
    public @ResponseBody Users add(@RequestParam String name,@RequestParam String email){
        Users springUser=new Users();

        springUser.setName(name);
        springUser.setEmail(email);
        userRepository.save(springUser);
        return springUser;
    }

    @PutMapping(path = "/update/{id}")
    public @ResponseBody Users update(@PathVariable Integer id,@RequestParam String name,@RequestParam String email){
        Users existing=userRepository.findById(id).orElse(null);

        if(existing!=null){
            existing.setName(name);
            existing.setEmail(email);
            userRepository.save(existing);
        }

        return existing;
    }

    @DeleteMapping(path = "/delete/{id}")
    public @ResponseBody String delete(@PathVariable Integer id){
        userRepository.deleteById(id);
        return "Id "+id+" has been successfully deleted!!";
    }
}
