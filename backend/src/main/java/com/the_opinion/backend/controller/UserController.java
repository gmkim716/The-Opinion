package com.the_opinion.backend.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

@Slf4j
public class UserController {

    @Autowired
    UserService userService;

}
