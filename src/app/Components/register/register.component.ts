import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormsModule, FormBuilder } from '@angular/forms'
import { MyValidate } from './my-validate.class';
import { UserService } from '../../Shared/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }
  tz: string;
  age: number;
  name: string;
  isMale: boolean;
  country: string;
  registerForm: FormGroup;
  submitted = false;
user:any;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
       age: ['', [Validators.required,MyValidate.checkAge]],
       tz:['', [Validators.required,MyValidate.checkTz]],
       country:['', [Validators.required,MyValidate.checkCountry]],
       isMale:[false],
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
        // check if all the fields are valid
    if (this.registerForm.invalid) {

      return;
    }
     else{ 
      this.user=JSON.parse( JSON.stringify(this.registerForm.value));
      this.userService.saveUser(this.user).subscribe(res=>res);
    }

    alert('SUCCESS!! :-)')
  }
 
  }

 


