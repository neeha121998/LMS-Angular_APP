import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { LoanregistrationComponent } from './loanregistration/loanregistration.component';

import { ApplyloanComponent } from './applyloan/applyloan.component';
import { HomeComponent } from './home/home.component';

import { LoanlistComponent } from './loanlist/loanlist.component';
import { EditloanComponent } from './editloan/editloan.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AboutComponent } from './about/about.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { ManagerComponent } from './manager/manager.component';
import { YettoapproveComponent } from './yettoapprove/yettoapprove.component';
import { ApprovedComponent } from './approved/approved.component';
import { HeaderComponent } from './header/header.component';

// import { RegComponent } from './reg/reg.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoanregistrationComponent,
   
    ApplyloanComponent,
    HomeComponent,
  
    LoanlistComponent,
       EditloanComponent,
       ForgetpasswordComponent,
       AboutComponent,
       ProfileeditComponent,
       ManagerComponent,
       YettoapproveComponent,
       ApprovedComponent,
       HeaderComponent,
      //  RegComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // MatDatepickerModule
 
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
