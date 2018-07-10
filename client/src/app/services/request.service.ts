import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

const SERVER_URL = 'http://localhost:3030';

@Injectable()
export class RequestService {

  constructor(private http: Http) {}

  processResponse(response: Promise<Response>) {
    return response.then(res => res.json())
    .catch(error => error.json())
    .then(resJson => {
      if(!resJson.success) return Promise.reject(resJson);
      return resJson;
    });
  }

  get(subUrl: string) {
    const headers = new Headers({ token: localStorage.getItem('token') });
    const response = this.http.get(SERVER_URL + subUrl, { headers }).toPromise();
    return this.processResponse(response);
  }

  post(subUrl: string, body: any) {
    const headers = new Headers({ token: localStorage.getItem('token') });
    const response = this.http.post(SERVER_URL + subUrl, body, { headers }).toPromise();
    return this.processResponse(response);
  }
}
