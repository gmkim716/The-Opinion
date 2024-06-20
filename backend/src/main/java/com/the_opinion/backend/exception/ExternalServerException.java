package com.the_opinion.backend.exception;

import org.springframework.http.HttpStatus;

public class ExternalServerException extends ServiceException {
    static final HttpStatus RESPONSE_CODE = HttpStatus.BAD_REQUEST;
    static final ErrorType ERROR_TYPE = ErrorType.ClientSystem;
    static final ErrorReason ERROR_REASON = ErrorReason.Invalid;
    static final int ERROR_CODE = 1204;

    public ExternalServerException(ErrorTarget errorTarget, ErrorReason errorReason, Throwable cause) {
        super(RESPONSE_CODE, ERROR_TYPE, errorTarget, ERROR_REASON, ERROR_CODE, errorTarget == ErrorTarget.SubDomain ? String.format("서브 도메인 생성 실패") : String.format("이메일 발송 실패"), cause);
    }
}
