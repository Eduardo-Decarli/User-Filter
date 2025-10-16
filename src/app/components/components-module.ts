import { Filter } from './filter/filter';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDetails } from './user-details/user-details';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material-module';
import { UsersListComponent } from './users-list/users-list';



@NgModule({
  declarations: [
    UserDetails,
    Filter,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ], exports: [
    UserDetails,
    Filter,
    UsersListComponent,
  ]
})
export class ComponentsModule { }
