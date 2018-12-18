package com.mysql;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

@EnableAutoConfiguration
@ComponentScan
public class App {
	@Autowired
	private JdbcTemplate jdbc;
//	private SampleDao sampleDTO;

	public void method() {
		
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
	    for(SampleDTO sample: list) {
	        System.out.println("id:" + sample.getId());
	        System.out.println("name:" + sample.getName());

	      }
	}

	public static void main(String[] args) {
		try (ConfigurableApplicationContext ctx = SpringApplication.run(App.class, args)) {
			App m = ctx.getBean(App.class);
			m.method();
		}
	}
}