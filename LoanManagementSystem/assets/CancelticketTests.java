package com.example.demo;

import java.sql.Date;


import java.util.Set;

import org.junit.jupiter.api.Test;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.format.annotation.DateTimeFormat;

import com.example.demo.layer2.Cancelticket;
import com.example.demo.layer2.Reservation;

import com.example.demo.layer3.CancelticketRepository;
import com.example.demo.layer3.CancelticketRepositoryImpl;
import com.example.demo.layer3.ReservationRepositoryImpl;
//import com.example.demo.layer3.ReservationRepositoryImpl;
@SpringBootTest
public class CancelticketTests {
	
	@Autowired
	CancelticketRepositoryImpl canTktRepoImpl;
	
	Cancelticket cantkt=null;
	
	@Autowired
	ReservationRepositoryImpl resRepoImpl=null;
	
	String strdate;
	
	@Test
	void contextLoads() {
		//Set<Employee2> empSet = empRepo.findEmployeesByDeptno(30);
		
		Cancelticket cantkt=canTktRepoImpl.findCancelticket(1);
		System.out.println(cantkt.getCancelid());
		System.out.println(cantkt.getCanceldate());
		System.out.println(cantkt.getRefundstatus());
		
		System.out.println(cantkt.getRefundamount());
		System.out.println(cantkt.getReservation().getTicketno());
		System.out.println(cantkt.getClass());
	
		
		System.out.println("-----------------");
	}
	@Test
	void addCancelticket() {
		resRepoImpl=new ReservationRepositoryImpl();
		Reservation resObj= resRepoImpl.findReservation(3);
		
		cantkt.setCancelid(8);
		
		strdate="1999-04-20";
		Date date2=Date.valueOf(strdate);
		cantkt.setCanceldate(date2);
		
		cantkt.setRefundstatus("refunded");
		cantkt.setRefundamount(2255.0);
		cantkt.setReservation(resObj);

		
		canTktRepoImpl.addCancelticket(cantkt);
		
		System.out.println("----Registered successfully----");
	}
	
//	@Test
//	void modifyCancelticket() {
//	
//	//Signup s ;
//	cantkt.setCancelid(5);
//	
//	cantkt.setCanceldate("mr");
//	
//	cantkt.setRefundstatus("refunded");
//	
//	cantkt.setRefundamount(2500.0);
//	cantkt.getReservation().setTicketno(3);
//	
//	
//	System.out.println("----Registered successfully----");
//}
	
	@Test
	void deleteCancelticket()
	{
		canTktRepoImpl.removeCancelticket(2);
	}
	
	@Test
	void findallCancelticket() {
		 
		Set<Cancelticket> ctset =canTktRepoImpl.findCancelticket();
		for (Cancelticket cantkt: ctset) {
			System.out.println(cantkt.getCancelid());
			System.out.println(cantkt.getCanceldate());
			System.out.println(cantkt.getRefundstatus());
			
			System.out.println(cantkt.getRefundamount());
			System.out.println(cantkt.getReservation().getTicketno());
			
			
			
			System.out.println("-----------------");
		}
	}

}