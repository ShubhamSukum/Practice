package com.database.sql.dynamic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/demo")
public class MainController  {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/add")
    public @ResponseBody Users addNewUser(@RequestParam String name,@RequestParam String email){
        Users springUser= new Users();
        springUser.setName(name);
        springUser.setEmail(email);
        userRepository.save(springUser);
        return springUser;
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Users> getAllUsers(){
        return userRepository.findAll();
    }

    @PutMapping(path = "/update/{id}")
    public @ResponseBody Users updateUser(@PathVariable Integer id, @RequestParam String name, @RequestParam String email) {
        Users existingUser = userRepository.findById(id).orElse(null);

        if (existingUser != null) {
            existingUser.setName(name);
            existingUser.setEmail(email);
            userRepository.save(existingUser);
        }

        return existingUser;
    }

    @DeleteMapping(path = "/delete/{id}")
    public @ResponseBody String deleteUser(@PathVariable Integer id) {
        userRepository.deleteById(id);
        return "User with ID " + id + " deleted successfully";
    }
}
