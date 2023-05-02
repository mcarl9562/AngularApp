import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {of} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  loginForm=new FormGroup({
      email: new FormControl(''),
      password:new FormControl('')
  });

  // here we need to connect the services with the login component for the authentication process  
  constructor(private auth: AuthService, private router:Router){}

  ngOnInit(): void {
      if(this.auth.isLoggedIn()){
        this.router.navigate(['admin']);
      }
  }
  
  onSubmit():void {
    //console.log(this.loginForm.value);
     if(this.loginForm.valid){
        this.auth.login(this.loginForm.value).subscribe(
          (result) =>{
              this.router.navigate(['admin']);
          },
          (err:Error) => {
            alert(err.message);
          }
        );
     } 

  }
}
