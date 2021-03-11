import { isEmptyExpression } from '@angular/compiler';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  changePassword(newPassword:HTMLInputElement,reNewPassword:HTMLInputElement):void{
    if(newPassword.value == reNewPassword.value ){
      alert('Password has been reset successfully !!!')
      this.router.navigate(["login"]);
    }
    else{
      alert('Input fileds mismatched');

    }
  }

}
