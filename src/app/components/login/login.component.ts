import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = {
  username: "Lolo",
  password: "1234"
};
message = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm:any){
    if (this.user.username === loginForm.value.username && this.user.password === loginForm.value.password){
      this.router.navigate(["product"])
    }
    else
    {
      this.message=true;
    }
    ;
  
  }

}
