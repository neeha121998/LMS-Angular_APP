import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';  
@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.css']
})
export class ProfileeditComponent implements OnInit {

  public P_type:any;

  public customerId: any = this.aroute.snapshot.params['id'];

  public address:any={dNo:'',streetName:'',city:'',pincode:''}
  public customerDetails:any = { customerId:'',firstName: '',lastName:'',age:'',accountNumber:'',phoneNumber:'',aadharNumber:'', emailId: '', password: '',  selectedLevel:'',sal:0,stipend:0,turnOverPerAnnum:0,salary:0, address:this.address};
  constructor(public custserv: CustomerserviceService,
    public router: Router,public aroute:ActivatedRoute) { }

   
  ngOnInit(): void {
    
 this.custserv.loginCustomer(this.customerId).subscribe(
     data=>{this.customerDetails=data
    
    if(this.customerDetails.stipend!=undefined)
    {
      this.customerDetails.sal=this.customerDetails.stipend
      this.P_type=1
    }
    else if(this.customerDetails.salary!=undefined)
    {
      this.customerDetails.sal=this.customerDetails.salary
      this.P_type=2
    }
    else{
      this.customerDetails.sal=this.customerDetails.turnOverPerAnnum
      this.P_type=3
    }
    })
}
  updateCustomer()
  {
if(this.P_type==1)
{
  console.log(this.P_type)
this.custserv.createStudent(this.customerDetails).subscribe(data=> Swal.fire({
  text: 'Details Got Updated!',
  icon: 'success'
}))
  }
else if( this.P_type==2)
{
  console.log(this.P_type)
  this.custserv.createEmployee(this.customerDetails).subscribe(data=>
    Swal.fire({
      text: 'Details Got Updated!',
      icon: 'success'
    })
    )
}
else{
  this.custserv.createBusiness(this.customerDetails).subscribe(data=> Swal.fire({
    text: 'Details Got Updated!',
    icon: 'success'
  }))
}


  }
}
