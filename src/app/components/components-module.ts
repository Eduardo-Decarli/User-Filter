import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetails } from './user-details/user-details';
import { AngularMaterialModule } from '../angular-material/angular-material-module';



@NgModule({
  declarations: [
    UserDetails
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ], exports: [
    UserDetails
  ]
})
export class ComponentsModule { }
