package org.example.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.domain.Article;
import org.example.dto.AddArticleRequest;
import org.example.dto.UpdateArticleRequest;
import org.example.repository.BlogRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest  // 테스트를 위한 Spring Boot 어플리케이션 컨텍스트를 제공
@AutoConfigureMockMvc  // MockMvc를 사용하기 위한 어노테이션
class BlogApiControllerTest {

    @Autowired
    protected MockMvc mockMvc;  // MockMvc: Spring MVC 테스트를 위한 핵심 클래스

    @Autowired
    protected ObjectMapper objectMapper;  // 직렬화, 역직렬화를 위한 클래스

    @Autowired
    private WebApplicationContext context;

    @Autowired
    BlogRepository blogRepository;

    @BeforeEach
    public void mockMvcSetUp() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
        blogRepository.deleteAll();  // 각 테스트 전에 데이터베이스 초기화
    }

    @DisplayName("addArticle: 블로그 글을 추가한다.")
    @Test
    public void addArticle() throws Exception {
        // given
        final String url = "/api/articles";
        final String title = "제목 1";
        final String content = "내용 1";
        final AddArticleRequest userRequest = new AddArticleRequest(title, content);

        // 객체 JSON으로 직렬화
        final String requestJson = objectMapper.writeValueAsString(userRequest);

        // when
        // 설정한 내용을 바탕으로 요청을 전송
        ResultActions result = mockMvc.perform(post(url)  // POST 메서드로 요청
                .contentType(MediaType.APPLICATION_JSON_VALUE)  // 요청 본문의 타입을 JSON으로 설정
                .content(requestJson)  // 요청 본문을 JSON으로 변환
        );

        // then
        result.andExpect(status().isCreated());  // HTTP 상태 코드가 201(CREATED)인지 확인

        List<Article> articles = blogRepository.findAll();

        // 테스트를 위해 데이터베이스를 초기화하는 경우, 아래 값을 1로 변경
        assertEquals(1, articles.size());
        assertThat(articles.get(0).getTitle()).isEqualTo(title);
        assertThat(articles.get(0).getContent()).isEqualTo(content);
    }

    @DisplayName("findAllArticles: 블로그 글 목록을 조회한다.")
    @Test
    public void findAllArticles() throws Exception {
        // given
        final String url = "/api/articles";
        final String title = "title";
        final String content = "content";

        blogRepository.save(Article.builder()
                .title(title)
                .content(content)
                .build());

        // when
        final ResultActions resultActions = mockMvc.perform(get(url)
                .accept(MediaType.APPLICATION_JSON_VALUE));

        // then
        resultActions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].content").value(content))  // $[0].content: JSON 배열의 첫 번째 객체의 content 필드
                .andExpect(jsonPath("$[0].title").value(title));  // $[0].title: JSON 배열의 첫 번째 객체의 title 필드
    }

    @DisplayName("findArticleById: 블로그 글을 조회한다.")
    @Test
    public void findArticle() throws Exception {
        // given
        final String url = "/api/articles";
        final String title = "title";
        final String content = "content";

        Article savedArticle = blogRepository.save(Article.builder()
                .title(title)
                .content(content)
                .build());

        // when
        final ResultActions resultActions = mockMvc.perform(get(url, savedArticle.getId()));  // GET 메서드로 요청

        // then
        resultActions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").value(content))  // $.content: JSON 객체의 content 필드
                .andExpect(jsonPath("$.title").value(title));  // $.title: JSON 객체의 title 필드
    }

    @DisplayName("deleteArticle: 블로그 글을 삭제한다.")
    @Test
    public void deleteArticle() throws Exception {
        // given
        final String url = "/api/articles/{id}";
        final String title = "title";
        final String content = "content";

        Article savedArticle = blogRepository.save(Article.builder()
                .title(title)
                .content(content)
                .build());

        // when
        mockMvc.perform(delete(url, savedArticle.getId()))  // DELETE 메서드로 요청
                .andExpect(status().isOk());  // HTTP 상태 코드가 200(OK)인지 확인

        // then
        List<Article> articles = blogRepository.findAll();

        assertThat(articles).isEmpty();  // 데이터베이스에 저장된 글이 없는지 확인
    }

    @DisplayName("updateArticle: 블로그 글을 수정한다.")
    @Test
    public void updateArticle() throws Exception {
        // given
        final String url = "/api/articles/{id}";
        final String title = "title";
        final String content = "content";

        Article savedArticle = blogRepository.save(Article.builder()
                .title(title)
                .content(content)
                .build());

        final String newTitle = "new title";
        final String newContent = "new content";

        UpdateArticleRequest request = new UpdateArticleRequest(newTitle, newContent);

        // when
        ResultActions result = mockMvc.perform(patch(url, savedArticle.getId())  // PATCH 메서드로 요청
                .contentType(MediaType.APPLICATION_JSON_VALUE)  // 요청 본문의 타입을 JSON으로 설정
                .content(objectMapper.writeValueAsString(request))  // 요청 본문을 JSON으로 변환
        );

        // then
        result.andExpect(status().isOk());  // HTTP 상태 코드가 200(OK)인지 확인

        Article article = blogRepository.findById(savedArticle.getId()).get();

        assertThat(article.getTitle()).isEqualTo(newTitle);
        assertThat(article.getContent()).isEqualTo(newContent);
    }
}
