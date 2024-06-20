package com.the_opinion.backend.log;

import com.the_opinion.backend.util.WebLogUtils;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserActivityLog extends ActivityLog {
    protected Long userSid = WebLogUtils.getAuthUserSid();
    protected String userIp = WebLogUtils.getRequestIp();

    public UserActivityLog(String table) {
        super(table);
    }
}
