```java
package com.user.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.user.dao.UsersDao;
import com.user.dto.UsersDto;


/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		UsersDao dao = new UsersDao();
		
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		
		UsersDto dto = dao.loginUser(id, pw);
		
		if(dto!=null) { // 로그인 성공하면
			HttpSession session = request.getSession();
			session.setAttribute("dto", dto); // -> 객체 전체를 세션에 저장.. 나중에 꺼내서 사용 가능(다른건 안써도 됨(user_id같은거))
			// session.setAttribute("id", id); -> 이렇게 하면 db가 아니라 폼에서 입력한 id를 세션에 저장해서 위험함!!
			// session.setAttribute("user_id", dto.getId());
			// 왜 id가 아니라 고유아이디를 쓸까..
			// 1. 중복아이디 있을 수 있음(사이트 정책마다 다를 듯)
			// 2. 중간에 아이디를 바꿈! 세션에 이전 아이디 그대로 남아있어서 안됨
			// 3. 인젝션 이슈
			response.sendRedirect("main.jsp");
		}else {
			response.sendRedirect("login.jsp?login=failed");
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
```
