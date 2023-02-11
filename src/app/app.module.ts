import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {Routes,RouterModule} from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserFormComponent } from './components/user-form/user-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

const routes:Routes=[
  {path:'',component: UsersComponent},
  {path:'users',component:UsersComponent},
  {path:'userDetails/:id',component:UserdetailsComponent},
  {path:'user/new',component:UserFormComponent},
  {path:'user/:id',component:UserFormComponent},
  {path:'**',component:NotfoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UserdetailsComponent,
    NotfoundComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
