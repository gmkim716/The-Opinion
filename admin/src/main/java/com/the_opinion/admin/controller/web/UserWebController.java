package com.the_opinion.admin.controller.web;

import com.the_opinion.admin.model.dto.AdminDTO;
import com.the_opinion.admin.service.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/admin/web/user")
public class UserWebController {
    private final AdminService adminService;

    @GetMapping(value = "")
    public String user(final AdminDTO requestAdminDto, final Pageable pageable, final Model model, @RequestParam(required = false) final String frag) {
        log.info("########## member requestAdminDto: {}", requestAdminDto);
        model.addAttribute("active", "member");
        if (frag == null) {
            return "the_opinion/user/user.html";
        } else {
            return "the_opinion/user/user.html :: " + frag;
        }
    }

}
