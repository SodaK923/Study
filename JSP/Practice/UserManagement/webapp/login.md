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
<form action="LoginServlet" method="get">
	ID <input type="text" name="id"><br>
	PW <input type="password" name="pw"><br>
	<input type="submit" value="signin">
</form>
<a href="main.jsp?login=false">메인</a>
</body>
</html>
```
