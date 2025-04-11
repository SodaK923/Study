```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page isELIgnored="false" %>
<%
 	String name = (String)request.getAttribute("name");
	if(name==null){
		response.sendRedirect("signup.jsp");
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 성공했어요</title>
</head>
<body>
<jsp:include page="/navbar.jsp"></jsp:include>
<h2>잘했어요</h2>
<p>환영합니다, ${requestScope.name } 님.</p>
<a href="${approot }/student/login.jsp">로그인하러가기</a>
</body>
</html>
```
