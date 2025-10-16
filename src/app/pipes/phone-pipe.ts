import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: false
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    if(!phone || phone.length < 10 || phone.length > 11) {
      return "Telefone Indisponível ou Inválido";
    }

    const CELLPHONE = phone.length === 11;

    if(CELLPHONE) {
      return `(${phone.substring(0, 2)}) ${phone.substring(3, 7)}-${phone.substring(7, 10)}`
    } else {
      return `(${phone.substring(0, 2)}) ${phone.substring(3, 6)}-${phone.substring(6)}`;
    }
  }

}
