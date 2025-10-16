import { Component } from '@angular/core';
import { IFilterOption } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.scss'
})
export class Filter {


  filterOptions: IFilterOption = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusFilter = [
    { description: 'Ativo', value: true},
    { description: 'Inativo', value: false}
  ];

  onFilter() {
    console.log(this.filterOptions)
  }
}
