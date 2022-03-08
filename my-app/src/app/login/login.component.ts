import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginModel } from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new LoginModel("", "");

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


onSubmit(): void{
  if (this.model.loginId == this.model.password){ //login条件　（https://tokkan.net/javascript/angularjs23.html）
    this.router.navigate(['menu']);
  } else {
    this.model.message = "ログインに失敗しました";
  }
}

}
