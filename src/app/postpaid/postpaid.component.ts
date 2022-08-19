import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {
  user: User = new User();
  from = 'sakethbolla@gmail.com'
  subject = 'hi'
  body = 'trial'
  paymentHandler:any = null;

  constructor(private signupservice: SignupService, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.invokeStripe();
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

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('invoice generated');
        
      }
    });
  
    paymentHandler.open({
      // name: 'FreakyJolly',
      // description: 'Buying a Hot Coffee',
      amount: amount * 100
    });
  }
  // gotoList() {
  //   this.router.navigate(['/invoice1']);
  // }
  gotoList3() {
    this.router.navigate(['/invoice6']);
  }
  gotoList2() {
    this.router.navigate(['/invoice5']);
  }
  gotoList1() {
    this.router.navigate(['/invoice4']);
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

}
