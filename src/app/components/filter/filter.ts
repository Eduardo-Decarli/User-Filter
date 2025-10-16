import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})
export class Filter {
  foods = [
    {
      value: 'teste',
      viewValue: 'teste'
    },
    {
      value: 'teste2',
      viewValue: 'teste2'
    }
  ]
}
