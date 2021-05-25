import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomingMessage } from 'http';
import { CustomerserviceService } from '../customerservice.service';
import { Loan } from '../loan';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
@Component({
  selector: 'app-yettoapprove',
  templateUrl: './yettoapprove.component.html',
  styleUrls: ['./yettoapprove.component.css']
})
export class YettoapproveComponent implements OnInit {

  public disable:boolean=false;
  public selectedFiles:any;

public loanlist:any=[];
public customerDetails:any={accountbalance:0}
public loanDetails:any;


  constructor(public loanserv:CustomerserviceService,public router:Router,public aroute:ActivatedRoute) { }

  approveLoan(id:any)
  {
    console.log(id);
this.loanserv.getLoanById(id).subscribe(data=>{this.loanDetails=data
console.log(this.loanDetails.customer.accountbalance);
console.log(this.loanDetails.loanAmount)
 
  this.loanDetails.status="Approved"
  console.log(this.loanDetails.customer.accountbalance);
this.loanserv.approveLoan(this.loanDetails).subscribe(data=>{
  alert("Are you sure ? "),window.location.reload() })


})

  }

sendMessage(id:any)
{
  // this.disable=true;
  Swal.fire({
    title: "Message!",
    text: "Enter Reason For Not Approving Request",
    input: 'text',
    showCancelButton: true        
}).then((result) => {
    if (result.value) {
      alert("Result: " +result.value);
      this.loanserv.getLoanById(id).subscribe(data=>{this.loanDetails=data,
        this.loanDetails.status=result.value,
        this.loanserv.updateLoan(this.loanDetails).subscribe(data=>{alert("Message sent"),window.location.reload()})
      });

    }
});
 
}




  ngOnInit(): void {
    this.loanserv.getPendingLoans().subscribe(data=>{this.loanlist=data

      for(var loan of this.loanlist)
      {
      
        if(loan.customer.stipend!=undefined)
        {       
          
          loan.income=loan.customer.stipend;
          loan.p_type='Student';
         
        }
        else if(loan.customer.salary!=undefined)
        {
          loan.income=loan.customer.salary;
          loan.p_type='Employee';
        }
        else{
          loan.income=loan.customer.turnOverPerAnnum;
          loan.p_type='Business';
        }
        
      }
  
  })

  }

}
