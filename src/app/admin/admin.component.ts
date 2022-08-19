import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Signup } from '../signup';
import { User } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: User = new User();
  users: any;
  number=2;
  saketh:any;
  deleteMessage: any;
  constructor(private adminservice: AdminService) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required]),
  });
  get f(){
    return this.form.controls;
  }
  //here will develop the logic and intialize the variables which are coming from forms 
  submit() {
    console.log(this.form.value)
    //here the logic will be there to develop your application can add logic here to call API hit.
    //here we are going to creaste the object user entity then we will call the api hit for the post operations.
    this.user.name = this.f['name'].value;
    this.user.password = this.f['password'].value;
    this.postUser();

  }

  deleteUser(id: number) {

    this.adminservice.deleteUser(id)

      .subscribe(

        data => {

          console.log(data);

          this.deleteMessage=true;

          this.adminservice.getUserList().subscribe(data =>{

            this.users =data

            })

        },

        error => console.log(error));

  }
  postUser() {                                   //Calls the REST API throgh the services

    this.adminservice.createUser(this.user)

      .subscribe(data => console.log(data), error => console.log(error));

  }
  //this method will pull or get all records from backend
  getAllUsers(){
    this.saketh="Displaying Data";
    this.adminservice.getUserList().subscribe((data: any) => {
      this.users = data; 
    })
  }
  ngOnInit(): void {
  }
  getUserListData(this: any) {
    console.log("Hi this is saketh")
    this.loginService.getUserList().subscribe((data: any) => {
      console.log("Hi im saketh");
      this.users = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file.
      console.log(this.user);
    })
  }
  get username():any{

    return this.form.get('name');

  }
  //both the methods which are there is respected form must be defined here

}


