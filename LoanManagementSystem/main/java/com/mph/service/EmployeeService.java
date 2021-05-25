package com.mph.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mph.entity.Employee;


public interface EmployeeService {
	public void createEmployee(Employee employee);
	public List<Employee> getEmployeeList();
	public Employee getEmployee(Employee employee);
	public List<Employee> updateEmployee(Employee employee);
	public List<Employee> deleteEmployee(int eid);

}
