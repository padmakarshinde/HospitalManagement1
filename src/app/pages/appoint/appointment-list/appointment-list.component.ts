import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/service/appservice/appointment';
import { AppointmentserviceService } from 'src/app/service/appservice/appointmentservice.service';
import { patients } from 'src/app/service/patientservice/patient';
import { PatientService } from 'src/app/service/patientservice/patient.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  public loading=true;
  public errormsg!:string;
  public successmsg!:string;
  public appointmentDetails!: Appointment[];
  constructor(private appointmentService:AppointmentserviceService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointment().subscribe(
      (appointment:Appointment[])=>{
        this.appointmentDetails=appointment;
        this.loading=false;
      },(error:ErrorEvent)=>{
        this.errormsg=error.error.message;
        this.loading=false; 
      }
    );
  }
  cancleAppointment(id:string){
    this.appointmentService.cancleAppointment(id).subscribe(
      (appointments:Appointment[])=>{
        this.appointmentDetails=appointments;
        this.successmsg='Cancell Successfully';
      },(error:ErrorEvent)=>{
        this.errormsg=error.error.message;
        
      }
    );
  }
  getPatientDetails(){
    this.appointmentService.getAppointment().subscribe(
      (Resp)=>{
        console.log(Resp);
        this.appointmentDetails =Resp;
      }
    );
  }
}
