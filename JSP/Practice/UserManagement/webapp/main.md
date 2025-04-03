```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page isELIgnored="false" %>
<%@ page import="com.user.dto.*" %>
<%
	UsersDto dto = (UsersDto)session.getAttribute("dto");
	
/*  	if(dto==null){
		response.sendRedirect("login.jsp");
		return;
	}
	String name = dto.getName(); */
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<p>임시 메인페이지..</p>
<c:choose>
	<c:when test="${not empty sessionScope.dto }">
		<p>${sessionScope.dto.name }님 안녕하세요</p>
		<a href="LogoutServlet">로그아웃</a>
	</c:when>
	<c:otherwise>
		<a href="register.jsp">회원가입</a>
		<a href="login.jsp">로그인</a>
	</c:otherwise>
</c:choose>

</body>
</html>
```
