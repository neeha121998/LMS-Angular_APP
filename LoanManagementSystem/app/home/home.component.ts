import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public eid: any = this.aroute.snapshot.params['id'];
  constructor(public restApi: CustomerserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }


  ngOnInit(): void {
    // console.log(this.eid);
  }

}
