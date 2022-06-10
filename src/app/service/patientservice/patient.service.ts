import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import baseUrl from 'src/app/service/helper';
import { patients } from './patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8081'


  public registerPatient(patientData: any) {
    return this.http.post(this.baseUrl + '/registerPatient', patientData);
  }
  public getPatient() {
    return this.http.get(this.baseUrl + '/getPatient');
  }
  
  public deletePatient(id: any) {
    return this.http.delete(this.baseUrl + '/deletePatient?id=' + id);
  }
  public updatePatient(patient: any){
    return this.http.put(this.baseUrl+ '/updatePatient', patient);
  }

  
  getAppointment():Observable<patients[]>{
    return this.http.get<patients[]>(`${baseUrl}/getAppointment`);
  }

  createAppointment(Appointmentdata: any):Observable<patients[]>{

    return this.http.post<patients[]>(`${baseUrl}/createAppointment`,{Appointmentdata});
  }

  


   
}
