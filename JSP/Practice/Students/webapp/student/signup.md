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
<title>회원가입</title>
</head>
<body>
<jsp:include page="/navbar.jsp"></jsp:include>
<h2>회원가입을 해요</h2>
<form action="${approot }/SignupEx" method="post">
	아이디 <input type="text" name="id" autocomplete="off"><br>
	비밀번호 <input type="password" name="pw"><br>
	이름 <input type="text" name="name"><br>
	이메일 <input type="text" name="email"><br>
	<button type="submit">회원가입</button>
</form>

<c:if test="${requestScope.flag eq 'failed' }">
	<p>모든 항목을 입력해주세요.</p>
</c:if>
</body>
</html>
```
