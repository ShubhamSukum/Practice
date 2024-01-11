package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.Users;

public interface UserRepository extends CrudRepository<Users,Integer>{

}
