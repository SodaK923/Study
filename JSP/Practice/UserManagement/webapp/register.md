```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="RegisterServlet" method="post">
	GRADE: <input type="text" name="grade"><br>
	NAME: <input type="text" name="name"><br>
	ID: <input type="text" name="id"><br>
	PW: <input type="password" name="pw"><br>
	ADDRESS: <input type="text" name="address"><br>
	PHONE: <input type="text" name="hp"><br>
	EMAIL: <input type="text" name="email"><br>
	<input type="submit" value="SIGNUP">
</form>
<a href="login.jsp">로그인하기</a>
</body>
</html>
```
