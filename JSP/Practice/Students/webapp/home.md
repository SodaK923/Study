```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page isELIgnored="false" %>
<%-- <%@ page import="com.st.dto.*" %> --%>
<%
/* 	String grade="";
 	StudentDto student = (StudentDto)session.getAttribute("student");
	if(student.getId().equals("admin") && student.getPw().equals("adminpass")){
		grade = "관리자";
	}
	
	request.setAttribute("grade", grade); */
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>메인</title>
</head>
<body>
<jsp:include page="/navbar.jsp"></jsp:include>
<h2>메인페이지</h2>
<!-- TODO: index로 쓸예정...아마도 -->
<%-- <c:choose>
	<c:when test="${sessionScope.student.role eq 'admin' }">
		<p>[관리자 모드]</p>
		${sessionScope.student.name } 님 안녕하세요. <br>
		<a href="manage.jsp">회원관리</a>
		<a href="LogoutEx">로그아웃</a>
	</c:when>
	<c:when test="${not empty sessionScope.student.name }">
		${sessionScope.student.name } 님 안녕하세요. <br>
		<a href="update.jsp">정보수정</a>
		<a href="LogoutEx">로그아웃</a>
	</c:when>
	<c:otherwise>
		<a href="signup.jsp">회원가입</a>
		<a href="login.jsp">로그인</a>
	</c:otherwise>
</c:choose> --%>
<p>메인페이지예여</p>
</body>
</html>
```
