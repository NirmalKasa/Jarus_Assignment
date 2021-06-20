import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatTableModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
