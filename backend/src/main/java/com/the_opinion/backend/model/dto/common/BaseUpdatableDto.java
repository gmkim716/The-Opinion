package com.the_opinion.backend.model.dto.common;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor  // 파라미터가 없는 기본 생성자 생성
public class BaseUpdatableDto implements Serializable {

    @Schema(description = "데이터 ID (sid) : DB 테이블의 PK로 사용", example = "34918")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    protected Long sid;

    @Schema(description = "데이터 생성 시간", example = "2022-03-14 20:38:11")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    protected LocalDateTime insertTime;

    @Schema(description = "데이터 변경 시간", example = "2022-03-14 20:38:11")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    protected LocalDateTime updateTime;

    @Schema(description = "데이터 삭제 시간", example = "2022-03-14 20:38:11")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    protected LocalDateTime deleteTime;

    @Schema(description = "입력 userId", example = "Jayden")
    protected String insertId;

    @Schema(description = "수정 userId", example = "Jayden")
    protected String updatedId;

    @Schema(description = "삭제 userId", example = "Jayden")
    protected String deletedId;
}
