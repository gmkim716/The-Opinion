# Spring 블로그 만들기

## 목표
- Admin 페이지에 필요한 기술 스택 학습

## 참고자료
- 스프링 부트 3 백엔드 개발자되기: 자바 편 

## 기술 스택
- Spring
- Spring Boot
- Spring Data JPA
- Spring Security
- Thymeleaf
- H2
- Lombok
- Gradle
- JUnit5

## 주요 학습 개념
- Spring으로 웹 화면 구성하기
- thymeleaf 사용법
- Spring Security
- JWT/OAuth2
- Github Action, script 작성
- (QueryDSL 사용법)

### resources 폴더에 static, templates 폴더는 쓰임이 다르다 
- static: image, CSS, Javascript를 보관
- templates: HTML 파일을 보관

### Thymeleaf 사용 문법
- th:text - 텍스트를 표현 	`th:text=${person.name}`
- th:each - 컬렉션을 반복	`th:each="person:${persons}"`
- th:if - 조건이 true일 때만 표시 `th:if=”${person.age}≥20”`
- th:unless - 조건이 false일 때만 표시 `th:unless=”${person.age}≥20”`
- th:href - 이동경로 `th:href=”@{/persons(id=${person.id})}”`
- th:with - 변수값 지정 `th:with=”name=${person.name}”`
- th:object - 선택한 객체로 지정 `th:object=”${person}”`