package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@EnableAutoConfiguration
@Repository
public class UserInfoDAO {
	@Autowired
	private NamedParameterJdbcTemplate template;

	public boolean login(String id, String pass) {

		UserInfoDTO reqDTO = new UserInfoDTO();
		reqDTO.setId(id);
		reqDTO.setPass(pass);

		System.out.println("DB検索");

		List<UserInfoDTO> list = template.query("SELECT * FROM USERINFO WHERE id=:id AND pass=:pass",
				new MapSqlParameterSource().addValue("id", reqDTO.getId()).addValue("pass", reqDTO.getPass()),
				(rs, i) -> {
					UserInfoDTO userInfoDTO = new UserInfoDTO();
					userInfoDTO.setId(rs.getString("id"));
					userInfoDTO.setPass(rs.getString("pass"));
					return userInfoDTO;
				});

		System.out.println("DB検索完了");

		int resultcount = list.size();
		if (resultcount == 1) {
			return true;

		} else {
			return false;
		}

	}
}