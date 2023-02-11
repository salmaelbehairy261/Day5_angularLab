import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL:string='http://localhost:3005/users'
  constructor(private myClient: HttpClient) { }
  getAllUsers(){
    return this.myClient.get(this.URL)
  }
  getUserById(userId:any){
    return this.myClient.get(`${this.URL}/${userId}`)
  }
  addNewUser(user:any){
    return this.myClient.post(this.URL,user)
  }
  editUser(userId:any,user:any){
    return this.myClient.put(`${this.URL}/${userId}`,user)
  }
  deleteUser(userId:any){
    return this.myClient.delete(`${this.URL}/${userId}`)
  }
}
