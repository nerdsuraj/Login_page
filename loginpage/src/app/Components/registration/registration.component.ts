import { Component, OnInit } from '@angular/core';
import { Icountary } from 'src/app/country.interface';
import {FormGroup, Validators,FormBuilder} from '@angular/forms';
import { UserService } from 'src/app/services/User/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public country:Array<Icountary> = [{id:1,countri:"india"},{id:2,countri:"usa"},
{id:3,countri:"nepal"},{id:4,countri:"pakistan"},]

registerForm!: FormGroup ;
submitted = false;
reverseData=[];



  constructor(private formBuilder: FormBuilder, private UserService: UserService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', Validators.required]
  });
  }


  register(){
    if(this.registerForm.valid){
      // console.log(this.registerForm.value)
      this.UserService.registration(this.registerForm.value).subscribe((response:any)=>{
        console.log(response);
        // this.registerForm.reset();
        //snack bar will be added here
        this.snackbar.open("people add sucessfully done!!",'',{
          duration: 3000,
        })
        
      },(error)=>{
        console.log(error)
      }
        )
    }else{
      console.log("form is inValid");
    }
    
  }

}
