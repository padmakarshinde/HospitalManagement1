import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentserviceService } from 'src/app/service/appservice/appointmentservice.service';
import { Doctor } from 'src/app/service/doctorservice/doctor';
import { DoctorService } from 'src/app/service/doctorservice/doctor.service';
import { PatientService } from 'src/app/service/patientservice/patient.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
DoctorDetails:any;
  searchValue!: string;
  console: any;

  patientToUpdate={
    firstname:"",
    lastname:"",    
    email:"",
    gender:"",
    phoneno:"",  
    address:"",
    treatement:""
  }

  constructor(private doctorservice:DoctorService,private router:Router,private patient:PatientService,private appointment:AppointmentserviceService){
    this.getDoctorDetails();
  }
  ngOnInit(): void {
     }

  getDoctorDetails(){
    this.doctorservice.getDoctor(Doctor).subscribe(
      (Resp)=>{
        console.log(Resp);
        this.DoctorDetails =Resp;
      }
    );
  }
   edit(){}
  edit1(appointment: { id: any, name: any,email: any,password: any,firstname: any,lastname: any,dob: any, gender: any,phoneno: any,address: any,treatement: any}){
    this.patientToUpdate=appointment;
  }

  generateappoint(updateForm:NgForm){
    this.appointment.GenerateAppoint(updateForm.value).subscribe(
      (resp: any)=>{
        alert("Appointment is successfully");
      },(error)=>{
        alert("Bad Credential")
      }
    )
  }

}
