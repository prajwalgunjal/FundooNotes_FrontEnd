import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  constructor(private http:HttpClient) { }

  PostService(url:string , paylode:any ,token:boolean = false, httpOption: any={}){
    return this.http.post(url,paylode,token && httpOption)
  }

  putService(url:string , reqData:any ,token:boolean=true, httpOption:any ={}){
    return this.http.put(url,reqData,token && httpOption)
  }

  GetService(url:any, token: boolean=true , httpOption: any){
    return this.http.get(url,token && httpOption)
  }
  DeleteService(url:any , token:boolean=true ,httpOption: any){
    return this.http.delete(url,token&& httpOption)
  }
}
