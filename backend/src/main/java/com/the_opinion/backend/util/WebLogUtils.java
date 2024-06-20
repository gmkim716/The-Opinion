package com.the_opinion.backend.util;

import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Parameter;
import java.util.UUID;

public class WebLogUtils {

    public static final String HEADER_NAME_USER_ACCESS_TOKEN = "X-User-Access-Token";
    public static final String HEADER_NAME_REQUEST_ID = "X-Request-Id";

    protected static Logger accessLogger = LoggerFactory.getLogger("access");
    protected static Logger systemLogger = LoggerFactory.getLogger("system");

    public static boolean isServicePath(String uri) {
        if (uri.startsWith("/api/the_opinion/")) {
            return true;
        }
        return false;
    }

    // ThreadLocal: requestId
    protected final static ThreadLocal<String> requestIdThreadLocal = new ThreadLocal<String>();

    public static String getRequestId() {
        String requestId = requestIdThreadLocal.get();
        return !StringUtils.isEmpty(requestId) ? requestId : newRequestId();
    }

    protected static String newRequestId() {
        String requestId = UUID.randomUUID().toString();
        requestIdThreadLocal.set(requestId);
        return requestId;
    }

    // TreadLocal: authMemberId
    protected final static ThreadLocal<Long> authUserSidThreadLocal = new ThreadLocal<Long>();
    public static Long getAuthUserSid() {
        return authUserSidThreadLocal.get();
    }
    public static void setAuthUserSid(Long authUserSid) {
        if (authUserSid != null) {
            authUserSidThreadLocal.set(authUserSid);
        } else {
            authUserSidThreadLocal.remove();
        }
    }
    public static void removeAuthUserSid() { authUserSidThreadLocal.remove();}

    // ThreadLocal: requestIp
    protected final static ThreadLocal<String> requestIpThreadLocal = new ThreadLocal<String>();
    public static String getRequestIp() { return requestIpThreadLocal.get(); }
    public static void setRequestIp(HttpServletRequest request) {
        final String requestIp = StringUtils.isEmpty(request.getHeader("X-Forwarded-For")) ? request.getRemoteAddr() : request.getHeader("X-Forwarded-For");
        setRequestIp(requestIp);
    }
}
