package com.example.demo;




import java.util.Set;
import java.time.LocalDate;
import java.util.Date;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.example.demo.layer2.Signup;
import com.example.demo.layer3.SignupRepository;
import com.example.demo.layer3.SignupRepositoryImpl;

@SpringBootTest
class SignupTests {
//LocalDate  t=new LocalDate.of(date,month,year);
	
	@Autowired
	SignupRepository SignupRepo;
	@Test
	void contextLoads() {
	//Set<Employee2> empSet = empRepo.findEmployeesByDeptno(30);
	
	Signup s=SignupRepo.findSignup(1);
	System.out.println(s.getUserid());
	System.out.println(s.getTitle());
	System.out.println(s.getFirstname());
	
	System.out.println(s.getLastname());
	System.out.println(s.getDateofbirth());
	System.out.println(s.getPhoneno());
	System.out.println(s.getEmailaddr());
	System.out.println(s.getPassword());
	System.out.println(s.getConfirmpassword());
	
	
	System.out.println("-----------------");
}
//	@Test
//	void addLoads() {
//	
//	Signup s ;
//	
//	s.setTitle("mr");
//	s.setFirstname("Avinash");
//	
//	s.setLastname("gangapatnam");
//	//s.setDateofbirth(04/30/1998);
//	s.setPhoneno(9056867548L);
//	s.setEmailaddr("av.gmail.com");
//	s.setPassword("avinash");
//	s.setConfirmpassword("avinash");
//	SignupRepo.addSignup(s);
//	
//	System.out.println("----Registered successfully----");
//}
//
//	@Test
//	void modifyLoads() {
//	
//	Signup s ;
//	s.setUserid(6);
//	s.setTitle("mr");
//	s.setFirstname("Avinash");
//	
//	s.setLastname("gangapatnam");
//	//s.setDateofbirth(30-Apr-1998);
//	s.setPhoneno(9056867547L);
//	s.setEmailaddr("av.gmail.com");
//	s.setPassword("avinash");
//	s.setConfirmpassword("avinash");
//	SignupRepo.modifySignup(s);
//	
//	System.out.println("----Registered successfully----");
//}
//	
	
	@Test
	void removeLoads() {
		SignupRepo.removeSignup(6);
	}
	
	@Test
	void findallLoads() {
		 
		Set<Signup> signupset =SignupRepo.findSignup();
		for (Signup s: signupset) {
			System.out.println(s.getUserid());
			System.out.println(s.getTitle());
			System.out.println(s.getFirstname());
			
			System.out.println(s.getLastname());
			System.out.println(s.getDateofbirth());
			System.out.println(s.getPhoneno());
			System.out.println(s.getEmailaddr());
			System.out.println(s.getPassword());
			System.out.println(s.getConfirmpassword());
			
			
			System.out.println("-----------------");
		}
	}
}

	
	
	
	
