package com.vehicle;

import org.junit.jupiter.api.Test;
import java.util.List;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;



@ExtendWith(SpringExtension.class)
@ContextConfiguration(locations = "classpath:spring.xml")
public class DepartmentPersistanceTest2 {
	@Autowired
	DepartmentRepository dri;
	
	@Test
	public void testInsertNewDept() {
		Department5 dept = new Department5();
		dept.setDepartmentName("COADING");dept.setDepartmentLocation("CHENNAI");
		dri.addDepartment(dept);
		
		
	}
	@Test
	public void testModify() {
		Department5 dept = new Department5();
		dept.setDepartmentNumber(4);
		dept.setDepartmentName("COADING");
		dept.setDepartmentLocation("CHENNAI");
		dri.modifyDepartment(dept);
		
		
	}
	@Test
	public void testRemove() {
		//dept.setDepartmentNumber(6);
		dri.removeDepartment(6);
		//System.out.println("dept"+dept.getDepartmentName());
		
	}
	@Test
	public void testFindAll() {
		//dept.setDepartmentNumber(6);
		List<Department5> deptlist = dri.findDepartments();
		for (Department5 d: deptlist) {
			System.out.println(d.getDepartmentName());
			System.out.println(d.getDepartmentNumber());
			System.out.println(d.getDepartmentLocation());
			System.out.println("-----------------");
		}
		//System.out.println("dept"+dept.getDepartmentName());
		
	}
	@Test
	public void testSqlFindAll() {
		//dept.setDepartmentNumber(6);
		List<Department5> deptlist = dri.findSqlDepartments();
		for (Department5 d: deptlist) {
			System.out.println(d.getDepartmentName());
			System.out.println(d.getDepartmentNumber());
			System.out.println(d.getDepartmentLocation());
			System.out.println("-----------------");
		}
		//System.out.println("dept"+dept.getDepartmentName());
		
	}
	@Test
	public void testJpqlFindAll() {
		//dept.setDepartmentNumber(6);
		List<Department5> deptlist = dri.findJpqlDepartments();
		for (Department5 d: deptlist) {
			System.out.println(d.getDepartmentName());
			System.out.println(d.getDepartmentNumber());
			System.out.println(d.getDepartmentLocation());
			System.out.println("-----------------");
		}
		//System.out.println("dept"+dept.getDepartmentName());
		
	}
	@Test
	public void testJpql2FindAll() {
		//dept.setDepartmentNumber(6);
		List<Department5> deptlist = dri.findJpql2Departments();
		for (Department5 d: deptlist) {
			System.out.println(d.getDepartmentName());
			System.out.println(d.getDepartmentNumber());
			System.out.println(d.getDepartmentLocation());
			System.out.println("-----------------");
		}
		//System.out.println("dept"+dept.getDepartmentName());
		
	}

}
