package org.example.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.example.domain.Article;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class AddArticleRequest {

    private String title;
    private String content;


    // 생성자를 사용해서 객체를 생성, DTO를 Entity로 변환
    // ex) 블로그 글을 추가할 때 저장할 엔티티로 변환하는 용도
    public Article toEntity() {
        return Article.builder()
                .title(title)
                .content(content)
                .build();
    }
}
