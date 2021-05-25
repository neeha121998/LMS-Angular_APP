import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {

  public customerId: any = this.aroute.snapshot.params['id'];
  constructor(public aroute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
