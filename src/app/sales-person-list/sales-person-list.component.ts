import { Component, OnInit } from '@angular/core';
import { Salesperson } from './salesperson';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  constructor() { }

  /*
   create an array of objects
  */
salespersonlist: Salesperson[] = [
      new Salesperson('nana', 'iman', 'imane@gmailcom', 5000),
      new Salesperson('nana', 'iman', 'imane@gmailcom', 5000),
      new Salesperson('nana', 'iman', 'imane@gmailcom', 5000)

];

  ngOnInit(): void {
  }
}
