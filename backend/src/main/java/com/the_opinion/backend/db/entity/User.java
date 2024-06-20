package com.the_opinion.backend.db.entity;

import com.the_opinion.backend.db.entity.common.IdGenerationUpdatableEntity;
import com.the_opinion.backend.model.dto.UserDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "user")
public class User extends IdGenerationUpdatableEntity {

    public enum Status {
        user, withdrawn, admin, disabled
    }

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String nickname;

    @Column
    private Boolean kakaoYn;

    @Column
    private String kakaoUserId;

    @Column
    private Integer birthYear;

    @Column
    private Integer gender;

    @Column
    private String phoneNumber;

    @Column
    private Boolean marketingTermsYn;

    @Column
    private LocalDateTime marketingTermsTime;

    @Column
    private LocalDateTime lastLoginTime;

    @Column
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column
    private LocalDateTime subscribeStartDate;

    @Column
    private LocalDateTime subscribeEndDate;

    @Column
    private Integer point;

    @Column
    private Integer cache;

    // UserDto.InsertEmailVO 객체를 통해 User 엔티티 필드를 설정하는 메서드
    public void setEmailMember(UserDto.InsertEmailVO userDto) {
        this.email = userDto.getEmail();
        this.password = userDto.getPassword();
        this.nickname = userDto.getNickname();
        this.birthYear = userDto.getBirthYear();
        this.gender = userDto.getGender();
    }
}
