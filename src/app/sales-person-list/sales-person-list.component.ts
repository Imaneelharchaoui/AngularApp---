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
      new Salesperson('nana', 'iman', 'imane@gmailcom', 50),
      new Salesperson('nana', 'iman', 'imane@gmailcom', 50),
      new Salesperson('nana', 'iman', 'imane@gmailcom', 50)

];

  ngOnInit(): void {
  }
}
