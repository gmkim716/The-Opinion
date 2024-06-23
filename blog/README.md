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
- JWT
- OAuth2

## 주요 학습 개념
- Spring으로 웹 화면 구성하기
- thymeleaf 사용법
- Spring Security
- JWT/OAuth2
- Github Action, script 작성
- (QueryDSL 사용법)

## Spring Web
### resources 폴더에 static, templates 폴더는 쓰임이 다르다 
- static: image, CSS, Javascript를 보관
- templates: HTML 파일을 보관

## Thymeleaf
### 문법
- th:text - 텍스트를 표현 	`th:text=${person.name}`
- th:each - 컬렉션을 반복	`th:each="person:${persons}"`
- th:if - 조건이 true일 때만 표시 `th:if=”${person.age}≥20”`
- th:unless - 조건이 false일 때만 표시 `th:unless=”${person.age}≥20”`
- th:href - 이동경로 `th:href=”@{/persons(id=${person.id})}”`
- th:with - 변수값 지정 `th:with=”name=${person.name}”`
- th:object - 선택한 객체로 지정 `th:object=”${person}”`

## Spring Security

## OAuth2
제 3의 서비스에 계정 관리를 맡기는 방식

### 용어 정리
- 리소스 오너 : 인증 서버에 자신의 정보를 사용하도록 **허가하는 주체**, 서비스 사용자가 리소스 오너에 해당한다
- 리소스 서버 : 리소스 오너의 정보를 갖고, 정보를 보호하는 주체 ex) 네이버, 구글, 페이스북 등
- 인증 서버 : 클라이언트에게 리소스 오너의 정보에 접근할 수 있는 **토큰을 발급하는 역할을 하는 애플리케이션**
- 클라이언트 애플리케이션 : 인증 서버에 인증을 받고 **리소스 오너의 정보를 사용하는 주체**

### 리소스 오너 정보를 취득하는 방법
1. `권한 부여 코드 승인` : 가장 잘 알려진 인증 방법, 클라이언트가 리소스에 접근하는데 사용, 권한에 접근할 수 있는 코드와 리소스 오너에 대한 토큰을 발급받는 방식
2. 암시적 승인 : 서버가 없는 자바스크립트 웹 애플리케이션 클라이언트에서 주로 사용, 리소스 오너의 인증과정 외에 별다른 인증 과정을 거치지 않고 액세스 토큰을 제공받는 방식
3. 리소스 소유자 암호 자격증명 승인 타입 : 클라이언트의 패스워드를 이용해 액세스 토큰에 대한 자격을 교환하는 방식
4. 클라이언트 자격증명 승인 타입 : 클라이언트가 컨텍스트 외부에서 액세스 토큰을 얻어 특정 리소스에 접근 요청하는 방식 

권한 부여 코드 승인 방식을 사용

### 