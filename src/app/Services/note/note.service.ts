import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpsService } from '../https/https.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl = environment.baseUrl;
  token :any;
  constructor(private https : HttpsService) { this.token=localStorage.getItem('token')}

  AddNote(reqData:any)
  {
    console.log(reqData);
    let header ={
      headers:new HttpHeaders(
        {
          'Content-type' : 'application/json',
          'Authorization' : 'Bearer ' + this.token,
        }
      )
    }
    console.log(reqData);
    return this.https.PostService(this.baseUrl+'Note/takeANote',reqData,true,header)
  }

  getNote()
  {
    let header ={
      headers:new HttpHeaders(
        {
          'Content-type' : 'application/json',
          'Authorization' : 'Bearer ' + this.token,
        }
      )
    }
    return this.https.GetService(this.baseUrl+'Note/Display',true,header)
  }
}
