```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%-- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%> --%>
<%
	String name = (String)request.getAttribute("name");
	if(name==null){
		response.sendRedirect("register.jsp?register=false");
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
환영합니다, <%=request.getAttribute("name") %> 님. 회원가입이 완료되었습니다.<br>
로그인하러 가기<br>
<a href="login.jsp">로그인</a>
</body>
</html>
```
