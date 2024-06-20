package com.the_opinion.admin.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass
public class IdGererationTimeBaseEntity extends BaseEntity {

    @Id
    @Column(name = "sid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long sid;

    @Column(name = "insert_time", insertable = false, updatable = false)
    protected LocalDateTime insertTime;

    @Column(name = "update_time", insertable = false, updatable = false)
    protected LocalDateTime updateTime;
}
