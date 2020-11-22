import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
 loginDetail:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log("route params",this.route)
    this.loginDetail=this.route.snapshot.params;
  }
  back()
  {
   this.router.navigate(['/dashboard']);
  }

}
