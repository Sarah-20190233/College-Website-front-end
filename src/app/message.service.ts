// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class MessageService {
//   constructor(private http: HttpClient) {}

//   sendMessage(msgDetails:any) {
//     return this.http.post('http://127.0.0.1:8000/api/message', {msgDetails});
//   }

//   getMessages(user1:any,user2:any) {
//     return this.http.get('http://127.0.0.1:8000/api/history', {params: {user1: user1,user2:user2}});
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  sendMessage(msgDetails: any) {
    return this.http.post(`${this.baseUrl}/message`, msgDetails);
  }

  getMessages(user1: any, user2: any) {
    return this.http.get(`${this.baseUrl}/history/${user1}/${user2}`);
  }

  getContacts(){
    return this.http.get(`${this.baseUrl}/professorsAndTas`);
  }
  getProfessorDetails(profName: any) {
    return this.http.get(`${this.baseUrl}/professorsDetails?professorName=${profName}`);
  }
  getTADetails(TAName:any){
    return this.http.get(`${this.baseUrl}/TADetails?TAName=${TAName}`);
  }
}