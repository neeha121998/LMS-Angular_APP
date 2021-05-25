import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';  
import Swal from 'sweetalert2/dist/sweetalert2.js';  
// import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public customerId:string='';

  public password:string='';
  public id:any;
  public pass:any;
  constructor(public restApi: CustomerserviceService,
    public router: Router) { }

  ngOnInit(): void {
  }
  
 login()
 {
          if(this.customerId=="M12345" && this.password=="Manager")
          {
            this.router.navigate(['/app-manager'])
          }
          else{

   this.restApi.loginCustomer(this.customerId).subscribe(
     data=>{this.id=data.customerId;
     this.pass=data.password;
     
     if(this.id=="notfound")
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
          this.router.navigate(['/login'])
        }
      })
     
     }
     
    else if(this.pass!=this.password){
      // alert('Please Verify Your Password');
      Swal.fire({
        text: 'Please Verify Your Password!',
        icon: 'warning'
      });



    }
  else{
    this.router.navigate(['/home',this.customerId]);

    // this.router.navigate(['/app-applyloan',this.customerId])
  }
  
  
  
  }

     

   );
 }

}
}
