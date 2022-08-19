import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { UseruiComponent } from './userui/userui.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';
import { Invoice1Component } from './invoice1/invoice1.component';
import { Invoice2Component } from './invoice2/invoice2.component';
import { Invoice3Component } from './invoice3/invoice3.component';
import { Invoice4Component } from './invoice4/invoice4.component';
import { Invoice5Component } from './invoice5/invoice5.component';
import { Invoice6Component } from './invoice6/invoice6.component';
import { Invoice7Component } from './invoice7/invoice7.component';
import { Invoice8Component } from './invoice8/invoice8.component';
import { Invoice9Component } from './invoice9/invoice9.component';

const routes: Routes = [{path: 'home',component: HomeComponent},
{path: 'prepaid',component: PrepaidComponent},
{path: 'postpaid',component:PostpaidComponent},
{path: 'login', component:LoginComponent },
{path:'signup',component:SignupComponent},
{path: 'dongle',component:DongleComponent},
{path:'userui',component:UseruiComponent},
{path:'admin',component:AdminComponent},
{path:'support',component:SupportComponent},
{path:'about',component:AboutComponent},
{path:'invoice1',component:Invoice1Component},
{path:'invoice2',component:Invoice2Component},
{path:'invoice3',component:Invoice3Component},
{path:'invoice4',component:Invoice4Component},
{path:'invoice5',component:Invoice5Component},
{path:'invoice6',component:Invoice6Component},
{path:'invoice7',component:Invoice7Component},
{path:'invoice8',component:Invoice8Component},
{path:'invoice9',component:Invoice9Component},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
