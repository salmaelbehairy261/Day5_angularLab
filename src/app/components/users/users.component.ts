import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:any;
  constructor(private userServices:UserService){
  }
  ngOnInit(): void {
      this.userServices.getAllUsers().subscribe((res)=>{
        this.users=res;
      });
  }
  deleteUserHandeler(userId:any){
    this.userServices.deleteUser(userId).subscribe(()=>{
      this.users=this.users.filter((user:any) => {
        return user.id !=userId
      })
    });
  }
}
