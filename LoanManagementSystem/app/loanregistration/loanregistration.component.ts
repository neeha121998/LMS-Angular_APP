import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { DatePipe } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-loanregistration',
  templateUrl: './loanregistration.component.html',
  styleUrls: ['./loanregistration.component.css'],
  providers: [DatePipe]
})
export class LoanregistrationComponent implements OnInit {
public rateofinterest:any;
public interest:any;
public fullAmount:any;
public myDate:any;
public dummyDate:any;
public rateDate:any;
public progress:any;
public currentFile:any;
public selectedFiles:any;
public message:any;
public fileInfos:any;
 public customerId: any = this.aroute.snapshot.params['id'];
 public loanDetails:any={loantype:'',term:'',surety:'',loanDate:'',status:'',customerId:'',loanAmount:0,fullAmount:0,interest:0,rateofinterest:0}
 
  constructor(public loanserv:CustomerserviceService,public router:Router,public aroute:ActivatedRoute,public datepipe: DatePipe) {
   // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   }

 
// console.log(myDate);



  ngOnInit(): void {
    this.myDate = new Date();
    this.dummyDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    this.rateDate = this.datepipe.transform(this.myDate, 'MM');
  }
 
 addLoan() {
  
   this.loanDetails.loanDate = this.dummyDate;
  this.aroute.paramMap.subscribe(params => {
    this.loanDetails.customerId = this.customerId})
    this.loanserv.createLoan(this.loanDetails).subscribe((data: {}) => { this.router.navigate(['/app-loanlist',this.customerId]) })
  
}
type(){
  //min 50k max 30L
console.log(this.loanDetails.loanAmount);
      if(this.loanDetails.loantype == 'Education'){
        if(this.loanDetails.loanAmount < 50000){
          
          alert('Minimum amount for education loan is 50k');
         window.location.reload();
         
        }
        else{
          this.loanDetails.rateofinterest = 8
        }
      }
      //min 2L max 50L
      else if(this.loanDetails.loantype == 'Home'){
        if(this.loanDetails.loanAmount < 200000){
          alert('Minimum Amount for Home Loan 2Lakh');
          window.location.reload();
         
        }
        else{
          if(parseInt(this.rateDate)>= 5  ){
            this.loanDetails.rateofinterest=6
          }else{
            this.loanDetails.rateofinterest = 8
          }
          
        }
      }//min 5L
      else{
        if(this.loanDetails.loanAmount < 500000){
          alert('Minimum Amount for Start-Up loan is 5Lakh');
          window.location.reload();
         
        }
        else{
          this.loanDetails.rateofinterest = 9
        }
      }
}
term(){
  // console.log(parseInt(this.loanDetails.loanAmount)* this.loanDetails.rateofinterest);
  this.loanDetails.interest=(parseInt(this.loanDetails.loanAmount)*this.loanDetails.rateofinterest*parseInt(this.loanDetails.term)/(100*12));
  
  this.loanDetails.fullAmount=this.loanDetails.interest+parseInt(this.loanDetails.loanAmount);
  console.log(this.loanDetails.fullAmount);
  
}





}
