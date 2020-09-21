import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectViewComponent } from './perfect-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared-modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
const routes: Routes = [
  {
    path: '',
    component: PerfectViewComponent
  }
];

@NgModule({
  declarations: [PerfectViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class PerfectViewModule { }
