package com.the_opinion.admin.model.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "admin")
public class Admin extends IdGererationTimeBaseEntity {

    @Column
    private String id;

    @Column
    private String password;

    @Column
    private String role;

    @Column
    private String name;

    @Builder
    public Admin(String id, String password, String role, String name) {
        this.id = id;
        this.password = password;
        this.role = role;
        this.name = name;
    }
}