import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
   'Access-Control-Allow-Methods': 'GET,PUT,POST,OPTIONS'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = 'javaurl';

  constructor(private httpClient: HttpClient){}

  doLogin(payload : any){
    return this.httpClient.post(this.baseUrl+'/signin',payload,{responseType:'text'});
  }  


  doRegister(payload: any){
    return this.httpClient.post(this.baseUrl+'/signup',payload,{responseType:'text'});
  }









  // getMovieDetails(){
  // return   this.httpClient.get(this.baseUrl + '/listmovies');
  // }
  // getGenre(){
  //   return this.httpClient.get(this.baseUrl+'/genre');
  //   }
  // postReviews(user :any){
  //   return this.httpClient.post(this.baseUrl+'/review',user,{responseType:'text'});
  // }
  // getTopRatedMovies(){
  //   return this.httpClient.get(this.baseUrl+'/topratedmovies');
  // }
 
  // getMoviesByGenre(id: string) {
  //   var search = new URLSearchParams();
  //   return this.httpClient.get(this.baseUrl+'/genres/'+ id);
  // }

  // getMovie(id : any){
  //   debugger
  //  return this.httpClient.get(this.baseUrl+'/movie/'+id);
  // }

  // searchMovies(searchstr :string){
  // return  this.httpClient.get(this.baseUrl+'/topratedmovies');
  // }

  // getMovieNames(){
  //   return this.httpClient.get(this.baseUrl+'/movienames');
  // }
  
  }
