import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(private userService:UserService,public activeRoute:ActivatedRoute){}
  userForm= new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  })
  get getUsername(){
    return this.userForm.controls['userName']
  }
  get getPassword(){
    return this.userForm.controls['password']
  }
  Login(e:any){
    e.preventDefault()
    if(this.userForm.status=='VALID'){
      if(this.activeRoute.snapshot.params['id'])
        this.userService.editUser(this.activeRoute.snapshot.params['id'],this.userForm.value).subscribe();
      else
        this.userService.addNewUser(this.userForm.value).subscribe()
      this.userForm.reset()
    }
  }

}
