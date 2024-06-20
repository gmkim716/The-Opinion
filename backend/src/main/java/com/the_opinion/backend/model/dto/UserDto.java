package com.the_opinion.backend.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.the_opinion.backend.model.dto.common.BaseUpdatableDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data  // getter, setter, toString, equals, hashCode를 생성
@EqualsAndHashCode(callSuper = false)  // 상위 클래스의 필드까지 비교하는 equals, hashCode를 생성
@AllArgsConstructor  // 모든 필드를 파라미터로 받는 생성자 생성
@NoArgsConstructor  // 파라미터가 없는 기본 생성자 생성
@Schema(description = "사용자 정보")
public class UserDto extends BaseUpdatableDto {

    @Schema(description = "사용자 이메일", example = "user@example.com")
    private String email;

    @Schema(description = "사용자 비밀번호", example = "password123")
    private String password;

    @Schema(description = "사용자 닉네임", example = "nickname")
    private String nickname;

    @Schema(description = "카카오 연동 여부", example = "true")
    private Boolean kakaoYn;

    @Schema(description = "카카오 회원 ID", example = "1234567890")
    private String kakaoMemberId;

    @Schema(description = "출생 연도", example = "1990")
    private Integer birthYear;

    @Schema(description = "성별 (0: 여성, 1: 남성)", example = "1")
    private Integer gender;

    @Schema(description = "전화번호", example = "010-1234-5678")
    private String phoneNumber;

    @Schema(description = "마케팅 약관 동의 여부", example = "true")
    private Boolean marketingThermsYn;

    @Schema(description = "마케팅 약관 동의 시간", example = "2023-01-01T12:00:00")
    private LocalDateTime marketingTermsTime;

    @Data
    @Schema(description = "이메일 회원 등록 VO")
    public static class InsertEmailVO {

        @Schema(description = "이메일", example = "gmkim716@gmail.com")
        private String email;

        @Schema(description = "비밀번호", example = "password123")
        private String password;

        @Schema(description = "닉네임", example = "nickname")
        private String nickname;

        @Schema(description = "출생 연도", example = "1990 s")
        private Integer birthYear;

        @Schema(description = "성별 (0: 여성, 1: 남성)", example = "1")
        private Integer gender;

        @Schema(description = "마케팅 약관 동의 여부", example = "true")
        private Boolean marketingTermsYn;

        @Schema(description = "마케팅 수신 변경 시간 - 수신 여부 값을 변경한 시간 기록", example = "2023-01-01T12:00:00")
        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
        @JsonProperty(access = JsonProperty.Access.READ_ONLY)
        private LocalDateTime marketingTermsTime;
    }
}
