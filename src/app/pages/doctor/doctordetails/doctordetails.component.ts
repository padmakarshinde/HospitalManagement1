import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/service/doctorservice/doctor.service';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.css']
})
export class DoctordetailsComponent implements OnInit {

  constructor(private doctorservice:DoctorService ) { }

  ngOnInit(): void {
  }
  registerDoctor(register: NgForm){
    this.doctorservice.registerDoctor(register.value).subscribe(
      (Response: any)=>{
        console.log(Response);
        alert("add successfully");
        register.reset();
        
      }
    );
  }

}
