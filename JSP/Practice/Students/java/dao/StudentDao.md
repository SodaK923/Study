```java
package com.st.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.st.dto.StudentDto;
import com.st.util.DBConn;

public class StudentDao {
	// 회원가입
	public boolean insertStudent(StudentDto student) {
		String sql = String.format("insert into students(id, pw, name, email) values('%s', '%s', '%s', '%s')", 
				student.getId(), student.getPw(), student.getName(), student.getEmail(), student.getRole());
		int result = DBConn.statementUpdate(sql);
		if(result>0) {
			return true;
		}else {
			return false;
		}
	}
	
	
	// 로그인
	public StudentDto login(String id, String pw) {
		String sql = String.format("select * from students where id='%s'", id);
//		System.out.println("실행된 SQL문: " + sql);
		ResultSet rs = DBConn.statementQuery(sql);
		try {
			if(rs.next()) {
				String storedPassword = rs.getString("pw");
				if(pw.trim().equals(storedPassword.trim())) {
					return new StudentDto(
							rs.getLong("user_id"),
							rs.getString("id"),
							rs.getString("pw"),
							rs.getString("name"),
							rs.getString("email"),
							rs.getString("role"));
				}else {
//					System.out.println("비밀번호 불일치"); // 이거 찍히는지 봐
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	
	// 아이디 찾기
	public String findId(String name, String email) {
		String sql = String.format("select id from students where name='%s' and email='%s'", name, email);
		ResultSet rs = DBConn.statementQuery(sql);
		String id = null;
		try {
			if(rs.next()) {
				id = rs.getString("id");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return id;
	}
	
	
	// 비번찾기(임시)
	public String findPw(String id, String email) {
		String sql = String.format("select pw from students where id='%s' and email='%s'", id, email);
		String pw = null;
		ResultSet rs = DBConn.statementQuery(sql);
		try {
			if(rs.next()) {
				pw = rs.getString("pw");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return pw;
	}
}
```
