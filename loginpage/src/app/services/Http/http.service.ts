import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  Endurl= environment.StartUrl;

  constructor(private httpClient : HttpClient) { }

  Post(url: string, reqData: any, token: boolean ,httpOption: any={} )
  {
    console.log("inside http service ",reqData);
   return this.httpClient.post(this.Endurl+url, reqData, token && httpOption)
  }

  Get(url: string ,token: boolean ,httpOption:any={})
  {
    // console.log("inside http service ",reqData);
    return this.httpClient.get(this.Endurl+url, token && httpOption)
  }

  put(url: string,body:any, token: boolean ,httpOption:any={}) {
    return this.httpClient.put(this.Endurl+url,body,token && httpOption);
    }
}
