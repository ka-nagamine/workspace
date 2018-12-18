package com.example.demo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.mysql.SampleDTO;

@EnableAutoConfiguration
@ComponentScan
@Service
public class SampleDAO {
	@Autowired
	private JdbcTemplate jdbc;

	public void selectAll() {

		List<SampleDTO> list = jdbc.query("SELECT * FROM TBL_TEST", new RowMapper<SampleDTO>() {
			public SampleDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
				SampleDTO sampleDTO = new SampleDTO();
				sampleDTO.setId(rs.getInt("id"));
				sampleDTO.setName(rs.getString("name"));
				return sampleDTO;
			}
		});
		//		List<Map<String, Object>> list = jdbc.queryForList("SELECT * FROM TBL_TEST");
		//		list.forEach(System.out::println);
		for (SampleDTO sample : list) {
			System.out.println("id:" + sample.getId());
			System.out.println("name:" + sample.getName());

		}
	}

	public void add(int id,String name) {

		System.out.println("追加します");
		SampleDTO reqDTO = new SampleDTO();
		reqDTO.setId(id);
		reqDTO.setName(name);

		jdbc.update("insert into TBL_TEST(id, name) values(? , ?)", reqDTO.getId(), reqDTO.getName());
		jdbc.update("insert into cptest(id, name) values(? , ?)", reqDTO.getId(), reqDTO.getName());

		List<SampleDTO> list = jdbc.query("SELECT * FROM TBL_TEST", new RowMapper<SampleDTO>() {
			public SampleDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
				SampleDTO sampleDTO = new SampleDTO();
				sampleDTO.setId(rs.getInt("id"));
				sampleDTO.setName(rs.getString("name"));
				return sampleDTO;
			}
		});
		for (SampleDTO sample : list) {
			System.out.println("id:" + sample.getId());
			System.out.println("name:" + sample.getName());

		}
	}
}