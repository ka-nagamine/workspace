package com.mysql;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.jdbc.core.JdbcTemplate;

@EnableAutoConfiguration
@ComponentScan
public class App {
	@Autowired
	private JdbcTemplate jdbc;

	public void method() {
		List<Map<String, Object>> list = jdbc.queryForList("SELECT * FROM TBL_TEST");
		list.forEach(System.out::println);
	}

	public static void main(String[] args) {
		try (ConfigurableApplicationContext ctx = SpringApplication.run(App.class, args)) {
			App m = ctx.getBean(App.class);
			m.method();
		}
	}
}