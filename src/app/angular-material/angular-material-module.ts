import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatListModule,
    MatDividerModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule, 
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatListModule,
    MatDividerModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideNativeDateAdapter()
  ]
})
export class AngularMaterialModule { }
