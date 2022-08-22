package com.prodapt.MicroServiceLogin.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "signup")
public class Signup {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String email;
	String password;
	String username;
	String mobile;
	@Override
	public String toString() {
		return "Signup [id=" + id + ", email=" + email + ", password=" + password + ", username=" + username
				+ ", mobile=" + mobile + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public Signup() {
		super();
	}
	public Signup(int id, String email, String password, String username, String mobile) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.username = username;
		this.mobile = mobile;
	}
}
