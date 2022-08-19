import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../signup';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup1: Signup = new Signup();
  users: any;
  constructor(private signupService: SignupService,private http: HttpClient,private router:Router) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
    password: new FormControl('', [Validators.required,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
    username: new FormControl('', [Validators.required,Validators.minLength(3)]),
    
  });


  get f(){
    return this.form.controls;
  }
  
  signup() {
    this.signup1.email = this.f['email'].value;
    this.signup1.password = this.f['password'].value;
    this.signup1.username = this.f['username'].value;   //add here when adding data into database
    this.postUser();

  }

  postUser() {                                  
    this.signupService.createUser(this.signup1)
      .subscribe(data => console.log(data), error => console.log(error));
  }



  ngOnInit(): void {


  }

}


