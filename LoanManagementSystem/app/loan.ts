import { Customer } from "./customer";



export interface Loan {

    loanId:number,
    loanAmount:number,
    loantype:string,
    
    surety:File,
    loanDate:Date,
    status:string,
   customer:Customer,
   income:number,
   p_type:string,
   loanStatus:boolean,
   loanDelete:boolean,
   fullAmount:number,
   interest:number,
   term:number,
  rateofinterest:number;


}