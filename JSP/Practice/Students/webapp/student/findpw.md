```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>비밀번호 찾기</title>
</head>
<body>
<jsp:include page="/navbar.jsp"></jsp:include>
<h2>이런! 비밀번호를 찾아요</h2>
<form action="${approot }/FindPw" method="post">
	아이디 <input type="text" name="id" autocomplete="off"><br>
	이메일 <input type="text" name="email" autocomplete="off"><br>
	<button type="submit">찾기</button>
</form>
<a href="findid.jsp">아이디 찾기</a>
<a href="login.jsp">로그인</a>
</body>
</html>
```
