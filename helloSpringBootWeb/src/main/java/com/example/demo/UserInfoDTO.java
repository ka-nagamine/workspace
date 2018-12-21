package com.example.demo;

import lombok.Data;

/**
 * userInfoテーブル用DTOクラス
 *
 */
@Data
public class UserInfoDTO {
	private String id = "";

	private String pass = "";

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}
}