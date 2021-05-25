package com.mph.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.mph.dao.EmployeeDao;
import com.mph.entity.Employee;
import com.mph.service.EmployeeService;

@Controller
public class EmployeeController {

	Employee employee;

	@Autowired
	EmployeeService employeeService;

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public ModelAndView register() {
		return new ModelAndView("register");
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView sigin() {
		return new ModelAndView("login");
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ModelAndView sigup(@RequestParam("txtfname") String fname, @RequestParam("txtlname") String lname,
			@RequestParam("txtgender") String gender, @RequestParam("txtemail") String email) {

		System.out.println(fname + " " + lname + email + gender);
		employee = new Employee();
		employee.setFname(fname);
		employee.setLname(lname);
		employee.setGender(gender);
		employee.setEmail(email);
		employeeService.createEmployee(employee);

		return new ModelAndView("login");
	}

	public ModelAndView allEmployee() {
		List<Employee> li = employeeService.getEmployeeList();
		ModelAndView mv = new ModelAndView("home");
		mv.addObject("emplist", li);
		return mv;
	}

	@RequestMapping(value = "/signin", method = RequestMethod.GET)
	public ModelAndView signin(@RequestParam("txtemail") String email, @RequestParam("txtpassword") String password) {

		employee = new Employee();
		employee.setEmail(email);

		Employee emp = employeeService.getEmployee(employee);
		if (emp == null) {
			ModelAndView mv = new ModelAndView("login");
			mv.addObject("msg", "Employee Not Found !!!");
			return mv;
		} else {
			return allEmployee();
		}

	}

	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	public ModelAndView delete(Employee employee) {
		List<Employee> emplist = employeeService.deleteEmployee(employee.getEid());
		ModelAndView mv = new ModelAndView("home");
		mv.addObject("emplist", emplist);
		return mv;

	}

	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public ModelAndView editEmp(Employee employee) {		
		return new ModelAndView("edit");		

	}
	
	@RequestMapping(value = "/update", method = RequestMethod.GET)
	public ModelAndView update(@ModelAttribute Employee employee) {
		employeeService.updateEmployee(employee);
		return allEmployee();

	}
}
