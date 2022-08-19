import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-invoice7',
  templateUrl: './invoice7.component.html',
  styleUrls: ['./invoice7.component.css']
})
export class Invoice7Component implements OnInit {
  user: User = new User();
  from = 'sakethbolla@gmail.com'
  subject = 'VoizFonica Payment invoice'
  body = 'trial'
  paymentHandler:any = null;

  constructor(private signupservice: SignupService, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {

  }
  email = new FormGroup({
    emailsend: new FormControl('', [Validators.required]),
  });

  get f3() {
    return this.email.controls
  }

  sendmail(){
    this.user.emailsend = this.f3['emailsend'].value;
    this.mail()
  }
  mail(){
    this.signupservice.SendMail(this.user.emailsend,this.subject,this.body)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
}