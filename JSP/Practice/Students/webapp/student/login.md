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
<title>로그인</title>
</head>
<body>
<jsp:include page="/navbar.jsp"></jsp:include>
<h2>로그인을 해요</h2>
<form action="${approot }/LoginEx" method="post">
	아이디 <input type="text" name="id" autocomplete="off"><br>
	비밀번호 <input type="password" name="pw"><br>
	<button type="submit">로그인</button><br>
</form>

<a href="findid.jsp">아이디 찾기</a>
<a href="findpw.jsp">비밀번호 찾기</a>
<a href="${approot }/home.jsp">메인</a>
	
<c:choose>
<c:when test="${empty requestScope.id && requestScope.submitted }">
	<p>아이디를 입력해주세요.</p>
</c:when>
<c:when test="${empty requestScope.pw && requestScope.submitted }">
	<p>비밀번호를 입력해주세요.</p>
</c:when>
<c:when test="${requestScope.flag eq 'failed' }">
	<p>아이디나 비밀번호가 틀려요.</p>
</c:when>
</c:choose>
</body>
</html>
```
