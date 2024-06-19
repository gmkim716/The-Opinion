package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.domain.Article;
import org.example.dto.AddArticleRequest;
import org.example.repository.BlogRepository;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor  // final, @NotNull인 필드만 파라미터로 받는 생성자 생성
@Service
public class BlogService {

    private final BlogRepository blogRepository;

    // 블로그 글 추가 메서드
    public Article save(AddArticleRequest addArticleRequest) {
        return blogRepository.save(addArticleRequest.toEntity());
    }
}
