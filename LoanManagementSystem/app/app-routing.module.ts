import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { LoanregistrationComponent } from './loanregistration/loanregistration.component';
import { LoginComponent } from './login/login.component';
import{RegisterComponent} from './register/register.component';

import {HomeComponent} from './home/home.component';
import { LoanlistComponent } from './loanlist/loanlist.component';
import { EditloanComponent } from './editloan/editloan.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {AboutComponent} from './about/about.component';
import { ProfileeditComponent } from './profileedit/profileedit.component';
import { ManagerComponent } from './manager/manager.component';
import { YettoapproveComponent } from './yettoapprove/yettoapprove.component';
import { ApprovedComponent } from './approved/approved.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'home/:id', component:HomeComponent},
  { path: 'about/:id', component:AboutComponent},
  { path: 'app-manager/about', component:AboutComponent},
  { path: 'app-manager/home', component:HomeComponent},
  { path: 'about', component: AboutComponent},

  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'app-loanregistration/:id', component: LoanregistrationComponent},

  { path: 'app-applyloan/:id', component: ApplyloanComponent},
  { path: 'app-loanlist/:id', component: LoanlistComponent},
  { path: 'app-editloan/:id/:cid', component: EditloanComponent},
  { path: 'app-forgetpassword', component: ForgetpasswordComponent},
  { path: 'app-profileedit/:id', component: ProfileeditComponent},
  { path: 'app-manager', component: ManagerComponent},
  { path: 'app-yettoapprove', component: YettoapproveComponent},
  { path: 'app-approved', component: ApprovedComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
