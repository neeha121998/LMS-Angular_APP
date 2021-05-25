import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  template: 'The href is: {{href}}'
})
export class HeaderComponent implements OnInit {
  public href: string = "";
  public manager = false;
  // public mid :any = this.aroute.snapshot.params['/app-manager'];
  public eid: any = this.aroute.snapshot.params['id'];
  public user:any;
  constructor(public restApi: CustomerserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }
    ngOnInit(): void {
      this.href = this.router.url;
        console.log(this.router.url);
      console.log(this.eid);
      if(this.eid){
        this.user = true;
        // this.router.navigate(['/homeu',this.eid]);
      }
      else if(this.href == '/app-manager'){
        this.manager = true;

      }
      
      else{
        this.user= false;
      }
    }

  

}
