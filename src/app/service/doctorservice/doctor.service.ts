import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  API = 'http://localhost:8081'

  constructor(private http:HttpClient) { }
public registerDoctor(doctorData: any) {
    return this.http.post(this.API + '/registerDoctor', doctorData);
  }
  public getDoctora() {
    return this.http.get(this.API + '/getDoctor');
 
  }   
  public getDoctor(doctor:any) {
    return this.http.get(`${baseUrl}/getDoctor`,doctor);
  }
}
