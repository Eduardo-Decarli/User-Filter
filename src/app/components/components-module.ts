import { Filter } from './filter/filter';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDetails } from './user-details/user-details';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material-module';



@NgModule({
  declarations: [
    UserDetails,
    Filter,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ], exports: [
    UserDetails,
    Filter,
  ]
})
export class ComponentsModule { }
