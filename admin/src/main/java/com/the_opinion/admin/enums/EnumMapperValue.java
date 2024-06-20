package com.the_opinion.admin.enums;

import com.the_opinion.admin.model.EnumMapperType;
import lombok.Data;

@Data
public class EnumMapperValue {
    private String code;
    private String title;

    public EnumMapperValue(EnumMapperType enumMapperType) {
        this.code = enumMapperType.getCode();
        this.title = enumMapperType.getTitle();
    }
}
