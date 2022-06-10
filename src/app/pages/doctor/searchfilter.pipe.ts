import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from 'src/app/service/doctorservice/doctor';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Doctors:  Doctor[ ],searchValue:string): Doctor[] {
    
    if(!Doctors || !searchValue){
      return Doctors;
    }
    
    return Doctors.filter(doctor => doctor.doctorname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  }

}
