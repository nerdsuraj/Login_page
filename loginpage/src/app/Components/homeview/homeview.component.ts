import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { UserService } from 'src/app/services/User/user.service';


@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.scss']
})
export class HomeviewComponent implements OnInit {
  peopleData:any;
  searchvalue:string="";
  constructor(private dialog: MatDialog, private UserService: UserService) { }

  ngOnInit(): void {
   this.getallpeople();
  }

   // for update note

   openDialog(item:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: "50%",
      data:item,
     
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      
    });
  }


  getallpeople()
  {
    this.UserService.getallPeople().subscribe((reponse:any)=>{
      console.log("request data",reponse);
      this.peopleData = reponse.data;
    })
  }
  searchword(search: any) {  // This is done for search pipe part in getallbooks and dashboard
    console.log(search);  //this .target.value is coming from console
    this.searchvalue=search

}
}