package com.mph.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mph.entity.Employee;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {

	@Autowired
	private SessionFactory sessionFactory;

	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	@Override
	public void createEmployee(Employee employee) {
		getSession().saveOrUpdate(employee);
		System.out.println("Employee Stored in DB Successfully !!!");
	}

	@Override
	public List<Employee> getEmployeeList() {
		Query query = getSession().createQuery("select me from Employee me");
		List<Employee> empList = query.list();
		return empList;
	}

	@Override
	public Employee getEmployee(Employee employee) {
		Criteria c = getSession().createCriteria(Employee.class);
		c.add(Restrictions.eq("email", employee.getEmail()));
		Employee emp = (Employee) c.uniqueResult();
		return emp;
	}

	@Override
	public List<Employee> updateEmployee(Employee employee) {
		Query query = getSession().createQuery("update Employee me set fname=:fname,lname=:lname,gender=:gender where eid =:eid");
		query.setParameter("fname",employee.getFname());
		query.setParameter("lname",employee.getLname());
		query.setParameter("gender",employee.getGender());
		query.setParameter("eid",employee.getEid());
		
		int noofrows = query.executeUpdate();
		if (noofrows > 0) {
			System.out.println("Updated " + noofrows + "rows. ");
		}
		return getEmployeeList();
	}

	@Override
	public List<Employee> deleteEmployee(int eid) {
		Query query = getSession().createQuery("delete Employee me where eid =:eid");
		query.setParameter("eid", eid);
		int noofrows = query.executeUpdate();
		if (noofrows > 0) {
			System.out.println("Deleted " + noofrows + "rows. ");
		}
		return getEmployeeList();
	}

}
