import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctorservice/doctor.service';
import { PatientService } from 'src/app/service/patientservice/patient.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  constructor(private patient:PatientService,private doctor:DoctorService) { }

  ngOnInit(): void {
    
  }

}
