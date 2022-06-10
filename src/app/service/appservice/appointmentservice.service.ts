import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from 'src/app/service/helper';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

  constructor(private http:HttpClient) { }

  
  public GenerateAppoint(appointment: any){
    return this.http.post(`${baseUrl}/createAppointment`,appointment);
  }
  public registerPatient(appointment: any) {
    return this.http.post('${baseUrl}/createAppointment', appointment);
  }
  getAppointment():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${baseUrl}/getAppointment`);
  }

  cancleAppointment(email:string):Observable<any>{
    return this.http.delete(`${baseUrl}/deletePatient/${email}`); 
  }
}
