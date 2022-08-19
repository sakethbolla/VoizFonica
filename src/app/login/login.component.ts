import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from '../signup';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signup1: Signup = new Signup();
  users: any;
  captcha : string;
  email : string;

  constructor(private signupService: SignupService, private http: HttpClient,private router:Router ) { 
    this.captcha = '';
    this.email = 'sakethbolla@gmail.com';
  }

  form2 = new FormGroup({
    password2: new FormControl('', [Validators.required,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])")]),
    username2: new FormControl('', [Validators.required,Validators.minLength(3)])    //add here when adding data into database
  });


  get f(){
    return this.form2.controls;
  }
  
  login() {
    this.http.get<any>("http://localhost:9002/signup/getdata").subscribe(res=>{
      const use= res.find((a:any)=>{
        return a.username === this.form2.value.username2 && a.password === this.form2.value.password2
      });
      if(use)
      {
        alert("Logged in successfully");
        this.form2.reset();
        this.router.navigate(['userui'])

      }
      else{
        alert("invalid data");
      }
    

    })
    
  }

  postUser() {                                  
    this.signupService.createUser(this.signup1)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  resolved(captchaResponse:string){
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
  }
  ngOnInit(): void {


  }
}
