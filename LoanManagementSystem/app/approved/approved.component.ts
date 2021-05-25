import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  public loanlist:any=[];
  public customerDetails:any={customerId:'',firstName:'',lastName:'',P_TYPE:'',stipend:0,salary:0,turnOverPerAnnum:0}
  public loanDetails:any={loantype:'',term:'',surety:'',loanDate:'',status:'',customerId:'',loanAmount:0,customer:this.customerDetails}
  constructor(public loanserv:CustomerserviceService,public router:Router,public aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loanserv.getNonPendingLoans().subscribe(data=>{this.loanlist=data

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
