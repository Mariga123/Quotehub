import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-add-quote-details',
  templateUrl: './add-quote-details.component.html',
  styleUrls: ['./add-quote-details.component.css']
})
export class AddQuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
  }

}
