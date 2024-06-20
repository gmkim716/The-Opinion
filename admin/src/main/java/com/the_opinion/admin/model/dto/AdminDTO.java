package com.the_opinion.admin.model.dto;

import com.the_opinion.admin.model.dto.common.BaseDTO;
import com.the_opinion.admin.model.entity.Admin;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper=false)  // BaseDTO를 상속받아서 equals, hashCode를 구현하지 않음
public class AdminDTO extends BaseDTO {
    private static final long serialVersionUID = -418513092678983985L;  // 직렬화 버전

    private String id;
    private String password;
    private String role;
    private String name;

    // DTO 객체 생성자
    public AdminDTO(Admin admin) {
        this.sid = admin.getSid();
        this.id = admin.getId();
        this.name = admin.getName();
    }

    // DTO를 Entity로 변환
    public Admin toEntity() {
        return Admin.builder()
                .id(this.id)
                .password(this.password)
                .build();
    }

}
