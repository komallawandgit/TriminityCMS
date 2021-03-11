import { Component, OnInit,NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any=[]
  forgetpass:boolean=false;
  constructor(private router:Router ) { }
  ngOnInit() {}
  checkLogin(){
    if (this.model.username == 'komal' && this.model.password == 'komal'){
      this.router.navigate(["./DashBoard"]);
    }
  } 
  forget(){
    this.forgetpass=true;
    this.model.username='komal';
  }
  passwordcheck(){
    this.forgetpass=true;
    this.model.username='komal'
  }
}
