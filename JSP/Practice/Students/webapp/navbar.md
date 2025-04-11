```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String approot = application.getContextPath();
application.setAttribute("approot", approot);
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
/* .navbar {
	display: flex;
	position: sticky;
	justify-content: center;
	top: 0px;
	background: #333;
	width: 100%;
	height: 40px;
	color: #FFFFFF;
	z-index: 1000;

} */
 .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px;
    color: white;
}

.left a,
.right a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}

.right {
    display: flex;
    align-items: center;
    gap: 10px;
}

}
</style>
</head>
<body>
<div class="navbar">
<div class="left">
    <a href="${approot }/home.jsp">Home</a>
</div>
<div class="right">
    <c:choose>
	<c:when test="${sessionScope.student.role eq 'admin' }">
		<p>[관리자 모드]</p>
		<p class="hello">${sessionScope.student.name } 님 안녕하세요.</p> <br>
		<a href="${approot }/student/manage.jsp">Manage</a>
		<a href="LogoutEx">Logout</a>
	</c:when>
	<c:when test="${not empty sessionScope.student.name }">
		${sessionScope.student.name } 님 안녕하세요. <br>
		<a href="${approot }/student/mypage.jsp">My Page</a>
		<a href="${approot }/LogoutEx">Log out</a>
	</c:when>
	<c:otherwise>
		<a href="${approot }/student/login.jsp">Login</a>
		<a href="${approot }/student/signup.jsp">Sign up</a>
	</c:otherwise>
</c:choose>
</div>
</div>

</body>
</html>
```
