# include
웹사이트를 만들 때 헤더나 네비게이터처럼 모든 페이지에서 공통으로 써야하는 경우 include를 사용하면 편리하다.
정적/동적으로 나뉜다.  
정적: <%@ include file="파일명.jsp" %>  
동적: <jsp:include page="파일명.jsp" />  
로그인이 됐을 경우 @@@님이 로그인했습니다 같이 바뀌니까 이럴 때 동적을 이용하는 것이 바람직하다.  
  

<%@ include file="파일명.jsp" %>  
✅ 예제: 네비게이션을 nav.jsp로 분리해서 include하기  
🔹 nav.jsp (공통 네비게이션 파일)  
```jsp
<nav>
    <ul>
        <li><a href="index.jsp">홈</a></li>
        <li><a href="product-list.jsp">상품 목록</a></li>
        <li><a href="cart.jsp">장바구니</a></li>
        <li><a href="mypage.jsp">마이페이지</a></li>
    </ul>
</nav>
```
  
🔹 index.jsp (홈 페이지)
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>홈</title>
</head>
<body>
    <%@ include file="nav.jsp" %> <!-- 네비게이션 포함 -->
    
    <h2>Welcome to the Shopping Mall!</h2>
</body>
</html>
```
  
📌 차이점?
```jsp
<%@ include file="nav.jsp" %> → 파일을 그대로 복붙(정적)
<jsp:include page="nav.jsp" /> → 실행할 때마다 동적으로 불러옴
```
