import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from 'src/app/service/patientservice/patient.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {

  patientDetails: any;

  patientToUpdate={
    id:"",
    name:"",
    email:"",
    password:"",
    firstname:"",
    lastname:"",
    dob:"",
    gender:"",
    phoneno:"",  
    address:"",
    treatement:""
  }
  constructor(private patientService:PatientService) { 
    this.getPatientDetails();
  }

  ngOnInit(): void {
  }
  register(registerForm: NgForm){
    this.patientService.registerPatient(registerForm.value).subscribe(
      (Response)=>{
        alert("Registration successfully");
        registerForm.reset();
        this.getPatientDetails();
      }
    );
  }

  getPatientDetails(){
    this.patientService.getPatient().subscribe(
      (Resp)=>{
        console.log(Resp);
        this.patientDetails =Resp;
      }
    );
  }
  deletePatient(patient: { id: any; }){
    this.patientService.deletePatient(patient.id).subscribe(
      (resp)=>{
        alert("Patient is deleted");
      }
    )
  }
  edit(patient: { id: any, name: any,email: any,password: any,firstname: any,lastname: any,dob: any, gender: any,phoneno: any,address: any,treatement: any}){
    this.patientToUpdate=patient;
  }

  updatePatient(){
    this.patientService.updatePatient(this.patientToUpdate).subscribe(
      (resp)=>{
        alert("Update is successfully");
      }
    )
  }
}
