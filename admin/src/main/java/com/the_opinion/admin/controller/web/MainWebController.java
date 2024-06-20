package com.the_opinion.admin.controller.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequestMapping("/admin/web")
public class MainWebController {

    @GetMapping(value = "/login")
    public String getLogin() { return "the_opinion/login.html"; }

    @GetMapping(value = "/main")
    public String getMainPage() { return "the_opinion/main.html"; }
}

