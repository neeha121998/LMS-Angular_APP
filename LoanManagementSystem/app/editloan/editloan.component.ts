import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-editloan',
  templateUrl: './editloan.component.html',
  styleUrls: ['./editloan.component.css']
})
export class EditloanComponent implements OnInit {

  constructor(public loanserv:CustomerserviceService,public router:Router,public aroute:ActivatedRoute) { }
  public loanDetails:any={loantype:'',term:'',surety:'',loanDate:'',status:'',customerId:'',loanAmount:0,rateofinterest:0}
  public loanId:any = this.aroute.snapshot.params['id'];
 public customerId:any=this.aroute.snapshot.params['cid'];

  ngOnInit(): void {

    this.loanserv.getLoanById(this.loanId).subscribe(data=>this.loanDetails=data)
  }
 term()
 {
     // console.log(parseInt(this.loanDetails.loanAmount)* this.loanDetails.rateofinterest);
     this.loanDetails.interest=(parseInt(this.loanDetails.loanAmount)*this.loanDetails.rateofinterest*parseInt(this.loanDetails.term)/(100*12));
    
     this.loanDetails.fullAmount=this.loanDetails.interest+parseInt(this.loanDetails.loanAmount);
     console.log(this.loanDetails.fullAmount);

 }
  updateLoan()
  {
    this.loanDetails.status="pending";
    
  

    //min 50k max 30L
  console.log(this.loanDetails.loanAmount);
        if(this.loanDetails.loantype == 'Education'){
          if(this.loanDetails.loanAmount < 50000){
            alert('Min is 50K');
           window.location.reload();
           
          }
        }
         
        
        //min 2L max 50L
        else if(this.loanDetails.loantype == 'Home'){
          if(this.loanDetails.loanAmount < 200000){
            alert('Minimum is 2Lakh');
            window.location.reload();
           
          }
         
            
          
        }//min 5L
        else{
          if(this.loanDetails.loanAmount < 500000){
            alert(' min amount for ur profession is 5Lakh');
            window.location.reload();
           
          }
         
        }
      
  

  
    
    this.loanserv.updateLoan(this.loanDetails).subscribe(data =>
      this.router.navigate(['/app-loanlist',this.customerId]))
  
  
}
  
}
