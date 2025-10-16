import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/User/address.interface';

@Pipe({
  name: 'address',
  standalone: false
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    if(address.rua || address.pais || address.numero == null || address.numero == undefined || address.estado || address.cidade) {
      return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
    } else {
      return "Endereço Indisponível ou Inválido";
    }
  }

}
