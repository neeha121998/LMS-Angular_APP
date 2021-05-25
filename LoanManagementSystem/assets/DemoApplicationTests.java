package com.example.demo;

import java.util.Set;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.layer2.Employee2;
import com.example.demo.layer3.EmployyeRepository;

@SpringBootTest
class DemoApplicationTests {
	@Autowired
	EmployyeRepository empRepo;
	@Test
	void contextLoads() {
		Set<Employee2> empSet = empRepo.findEmployeesByDeptno(30);
		for (Employee2 e: empSet) {
			System.out.println(e.getEmployeeName());
			System.out.println(e.getEmployeeJob());
			System.out.println(e.getEmployeeSalary());
			System.out.println("-----------------");
		}
	}

}
