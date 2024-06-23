package org.example.domain;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class User implements UserDetails {  // UserDetails를 상속받아 인증 객체로 사용한다

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "nickname", unique = true)
    private String nickname;

    @Builder
    public User(String email, String password, String nickname) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {  // GrantedAuthority: 권한을 나타내는 인터페이스
        return List.of(new SimpleGrantedAuthority("user"));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    // 계정 만료 여부
    @Override
    public boolean isAccountNonExpired() {
        return true;  // true: 만료되지 않았음, false: 만료됨
    }

    // 계정 잠금 여부
    @Override
    public boolean isAccountNonLocked() {
        return true;  // true: 잠금되지 않았음, false: 잠금됨
    }

    // 패스워드 만료 여부
    @Override
    public boolean isCredentialsNonExpired() {
        return true;  // true: 만료되지 않음, false: 만료됨
    }

    // 계정 사용 가능 여부
    @Override
    public boolean isEnabled() {
        return true;  // true: 사용 가능, false: 사용 불가
    }

    // 사용자 이름 변경
    public User update(String nickname) {
        this.nickname = nickname;
        return this;
    }
}
