package com.example.demo;

import lombok.Data;

/**
 * mailテーブル用DTOクラス
 *
 */
@Data
public class MailDTO {
	private String mailAddress;

	private String pass;

	public String getMailAddress() {
		return mailAddress;
	}

	public void setMailAddress(String mailAddress) {
		this.mailAddress = mailAddress;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}
}