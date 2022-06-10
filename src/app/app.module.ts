import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from './componant/navbar/navbar.component';
import { FooterComponent } from './componant/footer/footer.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DoctordetailsComponent } from './pages/doctor/doctordetails/doctordetails.component';
import { ViewappointmentComponent } from './pages/doctor/viewappointment/viewappointment.component';
import { DoctorDashboardComponent } from './pages/doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorSidebarComponent } from './pages/doctor/doctor-sidebar/doctor-sidebar.component';
import { SearchfilterPipe } from './pages/doctor/searchfilter.pipe';
import { PatientdetailsComponent } from './pages/patientdetails/patientdetails.component';
import { AppointmentComponent } from './pages/appoint/appointment/appointment.component';
import { GenerateappointmentComponent } from './pages/appoint/generateappointment/generateappointment.component';
import { AppointmentListComponent } from './pages/appoint/appointment-list/appointment-list.component';
import { authInterceptorProviders } from './service/guardService/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    DoctordetailsComponent,
    PatientdetailsComponent,
    AppointmentComponent,
    ViewappointmentComponent,
    DoctorDashboardComponent,
    DoctorSidebarComponent,
    SearchfilterPipe,
    GenerateappointmentComponent,
    AppointmentListComponent,
    AppointmentComponent,
NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
