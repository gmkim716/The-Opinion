package com.the_opinion.backend.services.common;

import com.the_opinion.backend.exception.ExternalServerException;
import com.the_opinion.backend.exception.ServiceException;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor  // 매개 변수가 있는 생성자를 생성
public class MailService {

    private final JavaMailSender sender;

    public void sendEmail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("사용자 비밀번호 수정 안내 메일");
        message.setText("안녕하세요. 더 오피니언의 관리자 입니다. \n\n" + "아래 링크에서 비밀번호를 변경하세요.\n" + "http://localhost:8080/password/reset?email=" + email);
        message.setFrom("gmkim716@gmail.com");

        try {
            sender.send(message);
        } catch (Exception e) {
            System.out.println("message : " + e.getMessage());
            if (e.getMessage().contains("550 5.1.1")) {  // 550 5.1.1 : 해당 이메일 주소가 잘못되었을 때
                throw new ExternalServerException(ServiceException.ErrorTarget.Email, ServiceException.ErrorReason.WrongAddress, null);
            } else {
                throw new ExternalServerException(ServiceException.ErrorTarget.Email, ServiceException.ErrorReason.MailApi, null);
            }
        }

    }
}
