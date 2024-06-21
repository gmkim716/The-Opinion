package org.example.config;

import lombok.RequiredArgsConstructor;
import org.example.service.UserDetailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import static org.springframework.boot.autoconfigure.security.servlet.PathRequest.toH2Console;

@Configuration
@EnableWebSecurity  // 스프링 시큐리티 설정을 활성화
@RequiredArgsConstructor
public class WebSecurityConfig {

    private final UserDetailService userService;

    /**
     * 스프링 시큐리티 기능을 비활성화한다.
     * 스프링 시큐리티가 제공하는 모든 기능을 사용하지는 않을 것임을 설정, 필요한 기능만 활성화
     * 일반적으로 정적 리소스에 대한 보안 설정을 비활성화
     */
    @Bean  // 스프링 빈으로 등록, 빈: 스프링 IoC 컨테이너에서 관리되는 객체
    public WebSecurityCustomizer configure() {
        return (web) -> web.ignoring()
            .requestMatchers(toH2Console())
            .requestMatchers(new AntPathRequestMatcher("/static/**"));
    }

    /**
     * 특정 HTTP 요청에 대해 웹 기반 보안을 구성한다.
     * 인증, 인가, 로그인, 로그아웃 설정
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            // 인증, 인가 설정
            .authorizeRequests(auth -> auth
                // 요청 경로를 지정, /login, /signup, /user 경로에 대해 허용
                .requestMatchers(
                    new AntPathRequestMatcher("/login"),
                    new AntPathRequestMatcher("/signup"),
                    new AntPathRequestMatcher("/user")
                ).permitAll()
                .anyRequest().authenticated())  // 나머지 요청에 대해서는 인증된 사용자만 접근 가능
            // 폼 기반 로그인 설정
            .formLogin(formLogin -> formLogin
                .loginPage("/login")  // 로그인 페이지 경로
                .defaultSuccessUrl("/articles")  // 로그인 성공 시 리다이렉트할 경로
            )
            // 로그아웃 설정
            .logout(logout -> logout
                .logoutSuccessUrl("/login")  // 로그아웃 성공 시 리다이렉트할 경로
                .invalidateHttpSession(true)  // 로그아웃 이후에 세션 삭제 여부를 결정
            )
            .csrf(AbstractHttpConfigurer::disable)  // CSRF 보안 설정 비활성화, 배포단계에서는 활성화 필요, 실습단계에서 편의상 비활성화
            .build();
    }

    /**
     * 인증 관리자 관련 옵션을 설정한다.
     * 인증 방법 설정 시 사용, ex) LDAP, JDBC 기반 인증 등
     */
    @Bean
    public AuthenticationManager authenticationManager(
        HttpSecurity http,
        BCryptPasswordEncoder bCryptPasswordEncoder,
        UserDetailService userDetailService
    ) throws Exception {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userService);
        authProvider.setPasswordEncoder(bCryptPasswordEncoder);
        return new ProviderManager(authProvider);
    }

    /**
     * 비밀번호 인코더로 사용할 빈 등록
     */
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}


