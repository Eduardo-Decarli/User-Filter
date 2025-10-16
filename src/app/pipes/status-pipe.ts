import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    if (status === undefined || status === null) {
      return 'Status Indisponível ou Inválido'
    }

    return status ? 'Ativo' : 'Inativo'
  }

}
