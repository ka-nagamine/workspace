package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@ComponentScan
@ResponseBody
public class HelloSpringBootWebController {

	@Autowired
	private SampleDAO app;
	@Autowired
	private UserInfoDAO user;

	@RequestMapping(value = "/index_sample", method = RequestMethod.GET)
	public ModelAndView index(ModelAndView mv) {
		mv.setViewName("index_sample");
		return mv;
	}

	@RequestMapping(value = "/result", method = RequestMethod.POST)
	public ModelAndView send(@RequestParam("inputvalue") String inputvalue, ModelAndView mv) {
		mv.setViewName("result_sample");
		mv.addObject("message", inputvalue);
		return mv;
	}

	@RequestMapping(value = "/*", method = RequestMethod.GET)
	public ModelAndView sampleReact(ModelAndView mv) {
		mv.setViewName("../static/index");
		return mv;
	}

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public ModelAndView indexReact(ModelAndView mv) {
		mv.setViewName("../static/index");
		return mv;
	}

	@RequestMapping(value = "/index2", method = RequestMethod.POST)
	public ModelAndView indexReact(@RequestParam("numInput1") int numInput1, @RequestParam("name") String name,
			ModelAndView mv) {
		mv.setViewName("../static/index");
		System.out.println("入力値1" + numInput1);
		System.out.println("入力値2" + name);
		app.add(numInput1, name);

		mv.addObject("id", numInput1);
		mv.addObject("name", name);
		return mv;
	}

	@PostMapping(value = "/mailReg")
	public ModelAndView mailReg(@RequestParam("mailAddress") String mailAddress, @RequestParam("pass") String pass,
			ModelAndView mv) {
		mv.setViewName("../static/index");
		System.out.println("入力値1" + mailAddress);
		System.out.println("入力値2" + pass);
		app.mailReg(mailAddress, pass);

		mv.addObject("mailAddress", mailAddress);
		mv.addObject("pass", pass);
		return mv;
	}

	// @PostMapping(value = "/login")
	// public String login(@RequestParam("userid") String id,
	// @RequestParam("password") String pass, ModelAndView mv) {
	// System.out.println("入力値1：" + id);
	// System.out.println("入力値2：" + pass);
	// boolean isAuth = user.login(id, pass);
	// System.out.println("ログイン結果：" + isAuth);
	// String authResult = "";
	// if (isAuth) {
	// authResult = "ログイン成功";
	// } else {
	// authResult = "ログイン失敗";
	// }
	// mv.addObject("auth", authResult);
	// mv.addObject("id", id);
	// mv.addObject("pass", pass);
	// return authResult;
	// }

	// @PostMapping(value = "/login")
	// public ModelAndView login(@RequestParam("userid") String id,
	// @RequestParam("password") String pass,
	// ModelAndView mv) {
	// mv.setViewName("../static/index");
	// System.out.println("入力値1：" + id);
	// System.out.println("入力値2：" + pass);
	// boolean isAuth = user.login(id, pass);
	// System.out.println("ログイン結果：" + isAuth);
	// String authResult = "";
	// if (isAuth) {
	// authResult = "ログイン成功";
	// mv.setViewName("rs");
	// } else {
	// authResult = "ログイン失敗";
	// mv.setViewName("rs2");
	// }
	// mv.addObject("auth", authResult);
	// mv.addObject("id", id);
	// mv.addObject("pass", pass);
	// return mv;
	// }

	@PostMapping(value = "/login")
	public ResponseEntity<String> login(@RequestParam("userid") String id, @RequestParam("password") String pass) { // ←ポイントです

		String authResult = "";
		boolean isAuth = user.login(id, pass);
		if (isAuth) {
			authResult = "ログインに成功しました。";
		} else {
			authResult = "ログインに失敗しました。";
		}

		return ResponseEntity.ok(authResult);// ←ポイントです！！
	}

}