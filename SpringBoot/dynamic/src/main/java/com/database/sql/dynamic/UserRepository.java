package com.database.sql.dynamic;

import com.database.sql.dynamic.Users;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Users,Integer> {

}
