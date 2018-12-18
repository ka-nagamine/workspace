package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@ComponentScan
public class HelloSpringBootWebController {

	@Autowired
	private SampleDAO app;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView index(ModelAndView mv) {
		mv.setViewName("index");
		return mv;
	}

	@RequestMapping(value = "/result", method = RequestMethod.POST)
	public ModelAndView send(@RequestParam("inputvalue") String inputvalue, ModelAndView mv) {
		mv.setViewName("result");
		mv.addObject("message", inputvalue);
		return mv;
	}

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public ModelAndView indexReact(ModelAndView mv) {
		mv.setViewName("index2");
		return mv;
	}

	@RequestMapping(value = "/index2", method = RequestMethod.POST)
	public ModelAndView indexReact(@RequestParam("numInput1") int numInput1, @RequestParam("name") String name,
			ModelAndView mv) {
		mv.setViewName("result2");
		System.out.println("入力値1" + numInput1);
		System.out.println("入力値2" + name);
        app.add(numInput1, name);

        mv.addObject("id", numInput1);
        mv.addObject("name", name);
		return mv;
	}

}