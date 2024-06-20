package com.the_opinion.backend.services;

import com.the_opinion.backend.exception.EntityNotFoundException;
import com.the_opinion.backend.exception.ServiceException;
import com.the_opinion.backend.db.dao.UserRepository;
import com.the_opinion.backend.db.entity.User;
import com.the_opinion.backend.model.dto.UserDto;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Transactional
    public UserDto getUserBySid(Long userSid) {
        User user = userRepository.findBySidAndDeleteTimeIsNull(userSid).orElseThrow(
            () -> new EntityNotFoundException(ServiceException.ErrorType.ServerSystem, ServiceException.ErrorTarget.ServerSystem, "가입된 회원이 아닙니다.",  null)
        );
        UserDto userDto = new UserDto();
        return userDto;
    }
}
