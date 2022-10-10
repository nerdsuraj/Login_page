import { Component, OnInit,Inject } from '@angular/core';
import { Icountary } from 'src/app/country.interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/services/User/user.service';
import { RegistrationComponent } from '../registration/registration.component';
import { HomeviewComponent } from '../homeview/homeview.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  name:any;
  email:any;
  dob:any;
  address:any;
  country:any;
  id:any;

  public countiry:Array<Icountary> = [{id:1,countri:"india"},{id:2,countri:"usa"},
  {id:3,countri:"nepal"},{id:4,countri:"pakistan"},]

  constructor( private UserService: UserService,
    public dialogRef: MatDialogRef<HomeviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any)
     {
     
      this.name = data.name;
      this.email = data.email;
      this.dob = data.dob;
      this.address = data.address;
      this.country = data.country;
      this.id = data._id;
      }

      onNoClick(): void {
        this.dialogRef.close();
      }

  ngOnInit(): void {
  }


  closeDialog()
  {
    let reqdata={
      name:this.name,
      email:this.email,
      dob:this.dob,
      address:this.address,
      country:this.country,
      _id:this.id
    }
    this.UserService.updatePeople(reqdata).subscribe((response:any)=>{
      console.log("update response",response)
      this.dialogRef.close(response)
    })
  }


  autorelode(){
    window.location.reload();
  }

}
