import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TableModule } from '../shared/ui/table/table.module';

const components = [
  HomeComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    TableModule
  ],
  exports: [
    ...components
  ]
})
export class HomeModule { }
