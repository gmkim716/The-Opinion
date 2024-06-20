package com.the_opinion.admin.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CodeGroup extends IdGererationTimeBaseEntity {

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "codeGroup")
    private List<CodeMaster> codeMasterList;

    @Column
    private String groupCode;

    @Column
    private String groupName;
}
