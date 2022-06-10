import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctorservice/doctor.service';
import { PatientService } from 'src/app/service/patientservice/patient.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
patientDetails:any;
doctordetails:any;
  constructor(private patient:PatientService,private doctor:DoctorService) { }

  ngOnInit(): void {
  }

}
