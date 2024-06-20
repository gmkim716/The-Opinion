package com.the_opinion.admin.model.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "code_master")
public class CodeMaster extends IdGenerationTimeBaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "code_group_sid")
    private CodeGroup codeGroup;
}
