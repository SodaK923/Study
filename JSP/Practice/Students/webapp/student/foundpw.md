```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>비밀번호를 찾았어요(아닐수도)</title>
</head>
<body>
<jsp:include page="/navbar.jsp"></jsp:include>
<c:choose>
<c:when test="${requestScope.flag eq 'success' }">
	<h2>비밀번호를 찾았어요</h2>
	<p>${requestScope.message }</p>
	<a href="${approot }/student/login.jsp">로그인 해요</a>
</c:when>
<c:when test="${requestScope.flag eq 'fail' }">
	<h2>비밀번호를 못찾았어요</h2>
	${requestScope.message }<br>
	<a href="${approot }/student/findpw.jsp">다시 찾아봐요</a>
</c:when>
<c:otherwise>
	<p>오류가 발생했습니다.</p>
    <a href="${approot }/student/findpw.jsp">비밀번호를 찾아요</a>
</c:otherwise>
</c:choose>
</body>
</html>
```
