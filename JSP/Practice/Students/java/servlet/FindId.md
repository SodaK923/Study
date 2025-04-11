```java
package com.st.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.st.dao.StudentDao;

/**
 * Servlet implementation class FindId
 */
@WebServlet("/FindId")
public class FindId extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FindId() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		
		StudentDao dao = new StudentDao();
		String id = dao.findId(name, email);
		
		if(id!=null) {
			request.setAttribute("flag", "success");
			request.setAttribute("message", "아이디는 " + id + " 예요.");
		}else {
			request.setAttribute("flag", "fail");
			request.setAttribute("message", "아이디를 찾을 수 없어요.");
		}
		request.getRequestDispatcher("/student/foundid.jsp").forward(request, response);
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
