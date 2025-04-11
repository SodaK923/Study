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
 * Servlet implementation class FindPw
 */
@WebServlet("/FindPw")
public class FindPw extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FindPw() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		String email = request.getParameter("email");
		
		StudentDao dao = new StudentDao();
		String pw = dao.findPw(id, email);
		
		if(pw!=null) {
			request.setAttribute("flag", "success");
			request.setAttribute("message", "비밀번호는 " + pw + " 예요.");
		}else {
			request.setAttribute("flag", "fail");
			request.setAttribute("message", "비밀번호를 찾을 수 없어요.");
		}
		request.getRequestDispatcher("/student/foundpw.jsp").forward(request, response);
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
