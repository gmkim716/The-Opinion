package com.the_opinion.backend.controller;

import com.the_opinion.backend.model.dto.UserDto;
import com.the_opinion.backend.services.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@Tag(name = "유저 API", description = "유저 정보 관리")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/{user_sid}")
    @Operation(summary = "멤버 상세 정보 조회 (by sid)", description = "멤버 상세 정보 조회 (by sid)")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "성공",
                    content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = UserDto.class))),
            @ApiResponse(responseCode = "400", description = "잘못된 요청"),
            @ApiResponse(responseCode = "404", description = "멤버를 찾을 수 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
    })
    public UserDto getUserBySid(
            @Parameter(description = "user sid", required = true)
            @PathVariable("user_sid") Long userSid) {
        return userService.getUserBySid(userSid);
    }
}
