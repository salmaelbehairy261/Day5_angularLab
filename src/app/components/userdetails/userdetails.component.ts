import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userId:any;
  user:any;
  constructor(public activeRoute:ActivatedRoute,private userService:UserService){
    this.userId=activeRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
      this.userService.getUserById(this.userId).subscribe((res)=>{
        this.user=res
      })
  }

}
