import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginObject:LoginModel=new LoginModel();
  constructor(private router:Router){}

  ngOnInit() {
  }
  SubmitForm()
  {
    this.router.navigate(['/user-detail',this.loginObject])
    console.log("form is",this.loginObject)
  }
}
export class LoginModel
{
  email:string;
  password:string;
}
