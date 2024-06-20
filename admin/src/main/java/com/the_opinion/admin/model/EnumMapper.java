package com.the_opinion.admin.model;

import com.the_opinion.admin.enums.EnumMapperValue;
import com.the_opinion.admin.model.entity.CodeGroup;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class EnumMapper {
    private Map<String, List<EnumMapperValue>> factory = new LinkedHashMap<>();

    public EnumMapper() {}

    public void put(String key, Class<? extends EnumMapperType> e) {
        factory.put(key, toEnumValues(e));
    }

    public void put(String key, CodeGroup e) {
        factory.put(key, toEnumValues(e));
    }

    public List<EnumMapperValue> get(String key) {
        return factory.get(key);
    }

    public List<EnumMapperValue> toEnumValues(Class<? extends EnumMapperType> e) {
        return Arrays.stream((e.getEnumConstants()))
                .filter(item -> item.getEnabled())
                .map(EnumMapperValue::new)
                .collect(Collectors.toList());
    }

    public List<EnumMapperValue> toEnumValues(CodeGroup e) {
        return e.getCodeMasterList(true).stream().map(EnumMapperValue::new).collect(Collectors.toList());
    }



}
