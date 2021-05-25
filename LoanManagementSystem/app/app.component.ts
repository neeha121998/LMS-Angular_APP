import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from './customerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public eid: any = this.aroute.snapshot.params['id'];
  public user=false;
  constructor(public restApi: CustomerserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }
    ngOnInit(): void {
      console.log(this.eid);
      if(this.eid){
        this.user = true;
        // this.router.navigate(['/homeu',this.eid]);
      }
      else{
        this.user = false;
      }
    }
}

