```java
package com.st.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.st.dao.StudentDao;
import com.st.dto.StudentDto;

/**
 * Servlet implementation class SignupEx
 */
@WebServlet("/SignupEx")
public class SignupEx extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SignupEx() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		
		StudentDao dao = new StudentDao();
		StudentDto student = new StudentDto(null, id, pw, name, email, null);
		boolean flag = dao.insertStudent(student);
		
		//request.setAttribute("submitted", true);
		
		if(flag) {
			request.setAttribute("name", name);
			RequestDispatcher dispatcher = request.getRequestDispatcher("/student/success.jsp");
			dispatcher.forward(request, response);
		}else {
			request.setAttribute("flag", "failed");
//			response.sendRedirect(request.getContextPath()+"/student/signup.jsp?regist=failed");
			request.getRequestDispatcher("/student/signup.jsp?regist=failed").forward(request, response);
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
