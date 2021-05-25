package com.example.demo;



import java.util.Set;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.layer2.Flight;
import com.example.demo.layer2.Reservation;
import com.example.demo.layer2.Seat;
import com.example.demo.layer3.FlightsRepository;
import com.example.demo.layer3.ReservationRepository;
import com.example.demo.layer3.SeatsRepository;

@SpringBootTest
class AirlineProjectApplicationTests {

	
	@Autowired
	FlightsRepository flightsRepo;
	
	@Autowired
	SeatsRepository seatsRepo;
	
	@Autowired
	ReservationRepository resvRepo;
	
	@Test
	void searchingFlightById() {
	
	Flight f=flightsRepo.findFlight(101);
	System.out.println(f.getFlightid());
	System.out.println(f.getFlightname());
	System.out.println(f.getSource());
	
	System.out.println(f.getDestination());
	System.out.println(f.getTotalseats());
	System.out.println(f.getDeparturetime());
	System.out.println(f.getArrivaltime());
	System.out.println(f.getDurationinhrs());
	
	
	System.out.println("-----------------");
}

	
	@Test
	void searchingFlightBySrcAndDest() {
	String src="HYDERABAD";
	String dest="PUNE";
	Set<Flight> fSet = flightsRepo.findFlight(src, dest);
	for (Flight f : fSet) {
		System.out.println(f.getFlightid());
		System.out.println(f.getFlightname());
		System.out.println(f.getSource());
		
		System.out.println(f.getDestination());
		System.out.println(f.getTotalseats());
		System.out.println(f.getDeparturetime());
		System.out.println(f.getArrivaltime());
		System.out.println(f.getDurationinhrs());
		System.out.println("-----------------");
		}
	}
	
	@Test
	void searchingSeatsByUserId() {
	int uid =1;
	
	Set<Seat> sSet = seatsRepo.findSeatByUserid(uid);
	for (Seat s : sSet) {
		System.out.println(s.getSno());
		System.out.println(s.getSeatno());
		System.out.println(s.getPassengerfullname());
		
		System.out.println(s.getAge());
		System.out.println(s.getAgegroup());
		System.out.println(s.getReservation().getTicketno());
		System.out.println("-----------------");
	}
}
	
	
	@Test
	void searchingSeatsByTicketNo() {
	int tno =1;
	
	Set<Seat> sSet = seatsRepo.findSeatByTicketno(tno);
	for (Seat s : sSet) {
		System.out.println(s.getReservation().getTicketno());
		System.out.println(s.getSno());
		System.out.println(s.getSeatno());
		System.out.println(s.getPassengerfullname());
		
		System.out.println(s.getAge());
		System.out.println(s.getAgegroup());
		System.out.println("-----------------");
	}
}
	
	
	@Test
	void searchingTicketInfo() {
	Set<Reservation> rSet = resvRepo.findTicketDetails(1);
	for (Reservation r : rSet) {
		System.out.println(r.getTicketno());
		System.out.println(r.getNoofpassengers());
		System.out.println(r.getCls());
		System.out.println(r.getTriptype());
		System.out.println(r.getDateofdeparture());
		System.out.println(r.getDateofreturn());
		System.out.println(r.getPrice());
		System.out.println(r.getTotalprice());
		System.out.println(r.getPaymentstatus());
		System.out.println(r.getTicketissue());
		System.out.println(r.getTicketstatus());
		System.out.println(r.getFlight().getFlightid());
		System.out.println(r.getSignup().getUserid());
		System.out.println("-----------------");
		
		  Set<Seat> sSet = seatsRepo.findSeatByTicketno(r.getTicketno());
		  for (Seat s : sSet) {
		  System.out.println(s.getSno());
		  System.out.println(s.getSeatno());
		  System.out.println(s.getPassengerfullname());
		  System.out.println(s.getAge());
		  System.out.println(s.getAgegroup());
		  
		  }//internal for
		 	
		System.out.println("**************");
	}// external for

}
	
	
	
	
}

	
	
	
	
