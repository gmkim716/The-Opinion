package org.example.config.jwt;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Setter
@Getter
@Component
@ConfigurationProperties("jwt")  // 자바 클래스에 properties에 설정한 값을 가져와 사용한다
public class JwtProperties {

    private String issuer;
    private String secretKey;
}
