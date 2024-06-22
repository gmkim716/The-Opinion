package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.domain.RefreshToken;
import org.example.repository.RefreshTokenRepository;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class RefreshTokenService {

    private final RefreshTokenRepository refreshTokenRepository;

    public RefreshToken findByRefreshToken(String refreshToken) {
        return refreshTokenRepository.findByRefreshToken(refreshToken)
            .orElseThrow(() -> new IllegalArgumentException("해당 리프레시 토큰을 찾을 수 없습니다. refreshToken: " + refreshToken));
    }
}
