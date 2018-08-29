import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import{FormsModule,FormGroup,ReactiveFormsModule, FormControl,Validators, FormBuilder}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{UserService} from './Shared/Services/user.service'

import { MyValidate } from './Components/register/my-validate.class';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
