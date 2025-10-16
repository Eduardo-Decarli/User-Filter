import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output('onFIlter') onFilterEmitt = new EventEmitter<IFilterOption>();

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
