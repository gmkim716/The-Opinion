package org.example.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.example.config.jwt.TokenProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
public class TokenAuthenticationFilter extends OncePerRequestFilter {
    private final TokenProvider tokenProvider;  // 토큰 생성 및 유효성 검증을 위한 클래스
    private final static String HEADER_AUTHROIZATION = "Authorization";  // 헤더 키 값
    private final static String TOKEN_PREFIX = "Bearer ";  // 토큰 접두사

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        // 요청 헤더의 Authenticaion 키 값을 가져온다
        String authroizationHeader = request.getHeader(HEADER_AUTHROIZATION);

        // 조회한 값에서 접두사를 제거한다
        String token = getAccessToken(authroizationHeader);

        // 가져온 토큰이 유효한지 확인한다. 유효하면 인증 정보를 설정한다
        if (tokenProvider.validToken(token)) {
            Authentication authentication = tokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }

    private String getAccessToken(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith(TOKEN_PREFIX)) {
            return authorizationHeader.substring(TOKEN_PREFIX.length());  // 접두사 제거
        }
        return null;  // 토큰이 없을 경우 null 반환
    }
}
