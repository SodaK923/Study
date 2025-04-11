```java
package com.st.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.st.dao.StudentDao;
import com.st.dto.StudentDto;

/**
 * Servlet implementation class LoginEx
 */
@WebServlet("/LoginEx")
public class LoginEx extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginEx() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		
		StudentDao dao = new StudentDao();
		StudentDto student = dao.login(id, pw);
		request.setAttribute("submitted", true);
		request.setAttribute("id", id);
		request.setAttribute("pw", pw);
		
		if(student!=null) {
			HttpSession session = request.getSession();
			session.setAttribute("student", student);
//			if("admin".equals(student.getRole())) {
//				request.setAttribute("grade", "관리자");
//			}
			response.sendRedirect("home.jsp");
		}else {
			request.setAttribute("flag", "failed");
			/* request.setAttribute("message", "아이디나 비밀번호가 틀려요."); */
			request.getRequestDispatcher("/student/login.jsp").forward(request, response);
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
