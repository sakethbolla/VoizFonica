import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { UseruiComponent } from './userui/userui.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { Invoice1Component } from './invoice1/invoice1.component';
import { Invoice2Component } from './invoice2/invoice2.component';
import { Invoice3Component } from './invoice3/invoice3.component';
import { Invoice4Component } from './invoice4/invoice4.component';
import { Invoice5Component } from './invoice5/invoice5.component';
import { Invoice6Component } from './invoice6/invoice6.component';
import { Invoice7Component } from './invoice7/invoice7.component';
import { Invoice8Component } from './invoice8/invoice8.component';
import { Invoice9Component } from './invoice9/invoice9.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrepaidComponent,
    PostpaidComponent,
    DongleComponent,
    UseruiComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    SupportComponent,
    AboutComponent,
    Invoice1Component,
    Invoice2Component,
    Invoice3Component,
    Invoice4Component,
    Invoice5Component,
    Invoice6Component,
    Invoice7Component,
    Invoice8Component,
    Invoice9Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
