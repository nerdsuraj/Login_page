import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;
  constructor(private httpService: HttpService) { 
    this.token = localStorage.getItem("token");
  }

  registration(reqData: any) {
    console.log("data in user service", reqData)

    let httpOption = {
      Headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    }

    return this.httpService.Post('people', reqData, false, httpOption)

  }


  getallPeople() {

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': " br " + this.token,
      })
    }
    return this.httpService.Get('people', true, httpOption)
  }

  updatePeople(reqData:any) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': " br " + this.token,
      })
    }
    return this.httpService.put("people/" + reqData._id , reqData,true, httpOptions)

  }

}
