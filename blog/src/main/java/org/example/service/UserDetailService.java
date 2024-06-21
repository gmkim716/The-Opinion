package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailService implements UserDetailsService {  // 스프링 시큐리티에서 사용자 정보를 가져오는 인터페이스

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new IllegalArgumentException(username));  // IllegalArgumentException: 잘못된 인자를 전달했을 때 발생하는 예외
    }
}
