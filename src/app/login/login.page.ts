import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password:''
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }
logMeIn(){
  // code for loggin in user goes here
  this.router.navigate(['/home']);
}

Register(){
  // code for loggin in user goes here
  this.router.navigate(['/home']);
}
}
