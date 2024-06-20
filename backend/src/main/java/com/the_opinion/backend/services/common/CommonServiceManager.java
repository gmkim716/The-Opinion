package com.the_opinion.backend.services.common;

import com.the_opinion.backend.db.dao.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CommonServiceManager {

    @Autowired
    UserRepository userRepository;


}
