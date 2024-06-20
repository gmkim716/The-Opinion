package com.the_opinion.admin.controller.web;

import com.the_opinion.admin.CommonService;
import com.the_opinion.admin.model.EnumMapper;
import com.the_opinion.admin.service.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/admin/web/admin")
public class AdminWebController {

    private final CommonService commonService;
    private final AdminService adminService;
    private final EnumMapper enumMapper;
}
