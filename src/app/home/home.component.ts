import { Component } from '@angular/core';
import { Employee } from '../shared/interfaces/employee.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  employees: Employee[] = [
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
    { firstName: 'Employee', lastName: '' },
  ];

  purchaseItem(plu: number) {
    console.log("🚀 ~ file: table.component.ts:16 ~ TableComponent ~ purchaseItem ~ plu", plu)
  }

}
