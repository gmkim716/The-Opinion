package com.the_opinion.admin;

import com.the_opinion.admin.repository.CodeGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommonService {

    private final CodeGroupRepository codeGroupRepository;
}
