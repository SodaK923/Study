```java
package com.user.dao;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.user.dto.UsersDto;
import com.user.util.DBConn;

public class UsersDao {
	// 회원가입
	public boolean insertUser(UsersDto dto) { // 회원가입 성공유무 체크할거라 boolean 으로 함
		String sql = String.format("insert into users(grade, name, id, pw, address, hp, email, regdate) "
				+ "values('%s', '%s', '%s', '%s', '%s', '%s', '%s', sysdate)", 
				dto.getGrade(), dto.getName(), dto.getId(), dto.getPw(), dto.getAddress(), dto.getHp(), dto.getEmail(), dto.getRegdate());
		int result = DBConn.statementUpdate(sql);
		if(result>0) { // 됐다!
			return true;
		}else {
			return false;
		}
	}
	
	// 로그인
	public UsersDto loginUser(String id, String pw) {
		String sql = String.format("select * from users where id='%s'", id); // 입력한 id의 유저정보 조회
		ResultSet rs = DBConn.statementQuery(sql); // 순회
		try {
			if(rs.next()) {
				String storedPW = rs.getString("pw"); // db에 저장된 pw를 storedPW에 담음
				if(pw.equals(storedPW)) { // 사용자가 입력한 정보와 일치하면
					return new UsersDto(
							rs.getLong("user_id"),
	                        rs.getString("grade"),
	                        rs.getString("name"),
	                        rs.getString("id"),
	                        rs.getString("pw"),
	                        rs.getString("address"),
	                        rs.getString("hp"),
	                        rs.getString("email"),
	                        rs.getTimestamp("regdate").toLocalDateTime()
						); // dto 객체 리턴 --> LoginServlet에서 호출
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null; // 틀리면 null 리턴 --> LoginServlet에서 호출
	}
	
	
}
```
