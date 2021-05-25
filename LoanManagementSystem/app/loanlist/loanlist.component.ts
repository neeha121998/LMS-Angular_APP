import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';  
@Component({
  selector: 'app-loanlist',
  templateUrl: './loanlist.component.html',
  styleUrls: ['./loanlist.component.css']
})
export class LoanlistComponent implements OnInit {
  public listloan:any =[];
public disable=true;

  public customerId: any = this.aroute.snapshot.params['id'];
  constructor (private loanservice:CustomerserviceService ,public router:Router,public aroute:ActivatedRoute){ }





  ngOnInit(): void {
    
    this.loanservice.getLoan(this.customerId).subscribe(data => 
      {this.listloan=data
     
        for(var loan of this.listloan)
        {
          if(loan.status=="Approved")
          {
               loan.loanStatus=false;
               loan.loanDelete = false;
          }
          else{
            loan.loanStatus=true;
            loan.loanDelete = true;
          }
          
        }
      
      
      
      }


      
        );
       
   
 }


deleteLoan(id:any)
{
  Swal.fire({
    title: "Are you sure to delete your loan Request with Id  "+id,
    // showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Ok`,
    denyButtonText: `Cancel`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.loanservice.deleteLoan(id).subscribe(data => this.listloan=data
      
        );
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  // if(confirm("Are you sure to delete your loan Request with Id  "+id))
  // {
  
  // }
}


}
