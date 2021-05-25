import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  public address: any = {
		dNo: '',
		streetName: '',
		city: '',
		pincode: ''
	}

public cpassword:any;

 public password:any;
 public customerDetails: any = {
  customerId: '',
  firstName: '',
  lastName: '',
  age: '',
  accountNumber: '',
  phoneNumber: '',
  aadharNumber: '',
  emailId: '',
  password: '',
  accountbalance: 0,
  selectedLevel: '',
  sal: 0,
  address: this.address
  
};
  constructor(public custserv:CustomerserviceService,public router:Router) { }


  ngOnInit(): void {
  }
  
  changePassword()
  {

    this.customerDetails.customerId = 'L' + this.customerDetails.aadharNumber;
    this.custserv.loginCustomer(  this.customerDetails.customerId).subscribe(
      data=>{  this.customerDetails.customerId =data.customerId;
      this.customerDetails=data
        if(  this.customerDetails.customerId=="notfound")
        {
         Swal.fire({
           title: 'You dont have any active account ,Please Register !!!!',
           // showDenyButton: true,
           showCancelButton: true,
           confirmButtonText: `Ok`,
           denyButtonText: `Cancel`,
         }).then((result) => {
           /* Read more about isConfirmed, isDenied below */
           if (result.isConfirmed) {
             this.router.navigate(['/register'])
           } else if (result.isDenied) {
             if(this.customerDetails.password)
             this.router.navigate(['/app-forgetpassword'])
           }
         })
        
        }

      else{
        if (this.password == this.cpassword){
          
          Swal.fire({
            title: 'Your Password got changed!! Please Login again',
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Ok`,
            denyButtonText: `Cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.customerDetails.password=this.password;
              this.custserv.updateCustomer(this.customerDetails).subscribe(
                
                data=>this.router.navigate(['/login']))
            } else if (result.isDenied) {
              Swal.fire({
                text: 'Passwords Not changed',
                icon: 'warning'
              });
            }
          })
        }
        else{
          Swal.fire({
            text: 'New Password and confirm Password must match',
            icon: 'warning'
          });
        }
        }
        }
     
     
     
     )
   
  }





}
