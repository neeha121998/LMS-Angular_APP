import {
	Component,
	OnInit
} from '@angular/core';
import {
	Router
} from '@angular/router';
import {
	$
} from 'protractor';
import {
	threadId
} from 'worker_threads';
import {
	CustomerserviceService
} from '../customerservice.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SweetAlertOptions } from 'sweetalert2';
@Component({
	selector: 'register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	public address: any = {
		dNo: '',
		streetName: '',
		city: '',
		pincode: ''
	}
	public student = false;
	public employee = false;
	public business = false;

	public id: any;
  public confirmPassword:any;

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
	constructor(public custserv: CustomerserviceService,
		public router: Router) {}

	ngOnInit(): void {}
	professions = [{
			name: "student"
		},
		{
			name: "employee"
		},
		{
			name: "business"
		},

	];

	
	createCustomer(): void {
		console.log(this.customerDetails.selectedLevel);
    if(this.customerDetails.firstName){
      if(this.customerDetails.lastName){
          if(this.customerDetails.emailId){
              if(this.customerDetails.password){
                if(this.confirmPassword){
                  if(this.customerDetails.password == this.confirmPassword){
                    if(this.address.dNo){
                      if(this.address.streetName){
                        if(this.address.city){
                          if(this.address.pincode){
                            if(this.customerDetails.accountNumber){
                              var acn = this.customerDetails.accountNumber;
                              var leng = acn.length;
                              if(leng >= 10 && leng < 15){
                                if(this.customerDetails.phoneNumber){
                                  if(this.customerDetails.aadharNumber){
                                    if(this.customerDetails.age){
                                      if(this.customerDetails.age >18){
                                         if(this.customerDetails.selectedLevel){
                                        if(this.customerDetails.sal){
                                          this.customerDetails.accountbalance = 500
                                          this.customerDetails.customerId = 'L' + this.customerDetails.aadharNumber;
                                          this.custserv.loginCustomer(this.customerDetails.customerId).subscribe(data => {
                                            this.id = data.customerId;
                                            if (this.id != "notfound") {
                                      
                                              Swal.fire({
                                                text: 'customer already exists!',
                                                icon: 'warning'
                                              });
                                            } else {
                                              Swal.fire({
                                                text: this.customerDetails.customerId +'  This is your ID ....please remember this',
//icon: 'Success'
                                              });
                                              Swal.fire({
                                                title: this.customerDetails.customerId + '  This is your ID ....please remember this',
                                                // showDenyButton: true,
                                                showCancelButton: true,
                                                confirmButtonText: `Ok`,
                                                denyButtonText: `Cancel`,
                                              }).then((result) => {
                                                /* Read more about isConfirmed, isDenied below */
                                                if (result.isConfirmed) {
                                                  if (this.customerDetails.selectedLevel == "student") {
                                                    this.custserv.createStudent(this.customerDetails)
                                                      .subscribe(data => {
                                                        Swal.fire({
                                                          text: data.firstName + ' your account created successfully.',
                                                          icon: 'success'
                                                        });
                                                      });
                                      
                                                    this.router.navigate(['/login'])
                                                  } else if (this.customerDetails.selectedLevel == "employee") {
                                                    this.custserv.createEmployee(this.customerDetails)
                                                      .subscribe(data => {
                                                        Swal.fire({
                                                          text: data.firstName + ' your account created successfully.',
                                                          icon: 'success'
                                                        });
                                                      });
                                      
                                      
                                                    this.router.navigate(['/login'])
                                      
                                                  } else {
                                                    this.custserv.createBusiness(this.customerDetails)
                                                      .subscribe(data => {
                                                        Swal.fire({
                                                          text: data.firstName + ' your account created successfully.',
                                                          icon: 'success'
                                                        });
                                                      });
                                      
                                      
                                                    this.router.navigate(['/login'])
                                      
                                                  }
                                                } else if (result.isDenied) {
                                                  this.router.navigate(['/register'])
                                                }
                                              })
                                              // alert(this.customerDetails.customerId + 'This is your ID ....please remember this');
                                      
                                      
                                            }
                                          })
                                        }
                                        else{
                                          Swal.fire({
                                            text: 'Salary is Required',
                                            icon: 'warning'
                                          });
                                        }
                                        
                                      }
                                      else{
                                        Swal.fire({
                                          text: 'Profession is Required',
                                          icon: 'warning'
                                        });
                                      }
                                      }else{
                                        Swal.fire({
                                          text: 'Minimum Age is 18 to Register',
                                          icon: 'warning'
                                        });
                                      }
                                    }
                                    else{
                                      Swal.fire({
                                        text: 'Age is Required',
                                        icon: 'warning'
                                      });
                                    }
                                  }
                                  else{
                                    Swal.fire({
                                      text: 'Aadhar Number is Required',
                                      icon: 'warning'
                                    });
                                  }
                                }
                                else{
                                  Swal.fire({
                                    text: 'Phone Number is Required',
                                    icon: 'warning'
                                  });
                                }
                              }else{
                                Swal.fire({
                                  text: 'Account Number should be minimum 10 Digits',
                                  icon: 'warning'
                                });
                              }
                            }
                            else{
                              Swal.fire({
                                text: 'Account Number is Required',
                                icon: 'warning'
                              });
                            }
                          }
                          else{
                            Swal.fire({
                              text: 'Pincode is Required',
                              icon: 'warning'
                            });
                          }
                        }
                        else{
                          Swal.fire({
                            text: 'City is Required',
                            icon: 'warning'
                          });
                        }
                      }
                      else{
                        Swal.fire({
                          text: 'Street Name is Required',
                          icon: 'warning'
                        });
                      }
                    }
                    else{
                      Swal.fire({
                        text: 'Door Number Required',
                        icon: 'warning'
                      });
                    }
                  }
                  else{
                    Swal.fire({
                      text: 'Confirm Password and Password must match!',
                      icon: 'warning'
                    });
                  }
                }
                else{
                  Swal.fire({
                    text: 'Confirm Password Required!',
                    icon: 'warning'
                  });
                }
              }
              else{
                Swal.fire({
                  text: 'Password is Required',
                  icon: 'warning'
                });
              }
          }
          else{
            Swal.fire({
              text: 'Email is Required',
              icon: 'warning'
            });
          }
      }
      else{
        Swal.fire({
          text: 'Last Name is Required',
          icon: 'warning'
        });
      }
    }
    else{
      Swal.fire({
        text: 'First Name is Required',
        icon: 'warning'
      });
    }

	}


}