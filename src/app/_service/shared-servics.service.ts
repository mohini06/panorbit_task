import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getAllusers(){
  
 
    return this.http.get('https://panorbit.in/api/users.json');
    // return this.http.get('https://panorbit.in/api/users.json')
  // 'https://panorbit.in/api/users.json'
     
     }
}
