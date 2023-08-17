import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  constructor(private http:HttpClient) { }
  PostService(url:string,payload :any,token : boolean=false,httpOptions:any{}){
    return this.http.post(url,payload,token && httpOptions)
  }

  putService(url:string ,reqData:any,token: boolean=true,httpOptions:any{}){
    return this.http.put(url,reqData,token && httpOptions)
  }

  GetService (url:string ,reqData:boolean=true,httpOptions:any){
    return this.http.get(url,reqData && httpOptions)
  }

  DeleteService (url:string ,token:boolean=true,httpOptions:any)
  {
    return this.http.delete(url,token && httpOptions)
  }
}
