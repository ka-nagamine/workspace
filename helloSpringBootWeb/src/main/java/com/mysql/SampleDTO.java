package com.mysql;

import lombok.Data;

/**
 * tbl_testテーブル用DTOクラス
 *
 */
@Data
public class SampleDTO {
	private int id;

	private String name;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}