```java
package com.st.dto;

import java.util.Objects;

public class StudentDto {
	private Long stId;
	private String id;
	private String pw;
	private String name;
	private String email;
	private String role;
	public Long getStId() {
		return stId;
	}
	public void setStId(Long stId) {
		this.stId = stId;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public int hashCode() {
		return Objects.hash(email, id, name, pw, role, stId);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		StudentDto other = (StudentDto) obj;
		return Objects.equals(email, other.email) && Objects.equals(id, other.id) && Objects.equals(name, other.name)
				&& Objects.equals(pw, other.pw) && Objects.equals(role, other.role) && Objects.equals(stId, other.stId);
	}
	@Override
	public String toString() {
		return "StudentDto [stId=" + stId + ", id=" + id + ", pw=" + pw + ", name=" + name + ", email=" + email
				+ ", role=" + role + "]";
	}
	public StudentDto(Long stId, String id, String pw, String name, String email, String role) {
		super();
		this.stId = stId;
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.email = email;
		this.role = role;
	}
	public StudentDto() {
		super();
	}
}
```
