import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

const AngularMaterialComps = [
  MatButtonModule,
  MatListModule,
  MatSidenavModule,
  MatDividerModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatIconModule
];

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [CommonModule, AngularMaterialComps, RouterModule, FormsModule],
  exports: [CommonModule, AngularMaterialComps, RouterModule, FormsModule, TableComponent],
  providers: [],
})
export class SharedModule {}
