import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { AppointmentListComponent } from './pages/appoint/appointment-list/appointment-list.component';
import { AppointmentComponent } from './pages/appoint/appointment/appointment.component';
import { GenerateappointmentComponent } from './pages/appoint/generateappointment/generateappointment.component';
import { DoctorDashboardComponent } from './pages/doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorSidebarComponent } from './pages/doctor/doctor-sidebar/doctor-sidebar.component';
import { DoctordetailsComponent } from './pages/doctor/doctordetails/doctordetails.component';
import { ViewappointmentComponent } from './pages/doctor/viewappointment/viewappointment.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PatientdetailsComponent } from './pages/patientdetails/patientdetails.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './service/guardService/admin.guard';
import { NormalGuard } from './service/guardService/normal.guard'
;

const routes: Routes = [

  { path: 'about', component: AboutComponent },
  {path:'',component:HomeComponent,pathMatch:'full',},
  {path:'signup',component:SignupComponent,pathMatch:'full',},
  {path:'login',component:LoginComponent,pathMatch:'full',},
  {path:'admin',
  component:DashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {path:'profile',
    component:ProfileComponent},
    {path:'patientdetails',
    component:PatientdetailsComponent},
    {path:'appointment-list',component:AppointmentListComponent},
    {path:'doctordetails',component:DoctordetailsComponent}
  ]},

  {path:'doctor-dashboard',
  component:DoctorDashboardComponent,
  canActivate:[NormalGuard],
  children:[
    {path:'profile',
    component:ProfileComponent},
    {path:'patientdetails',
    component:PatientdetailsComponent},
    {path:'viewappointment',
    component:ViewappointmentComponent},
    {path:'appointment-list',component:AppointmentListComponent}

  ]
},
  {path:'sidebar',component:SidebarComponent,pathMatch:'full'},
  {path:'doctordetails',component:DoctordetailsComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'patientdetails',component:PatientdetailsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'viewappointment',component:ViewappointmentComponent},
  {path:'doctorsidebar',component:DoctorSidebarComponent},
  {path:'generateappointment',component:GenerateappointmentComponent},
  {path:'appointment-list',component:AppointmentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
