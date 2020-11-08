import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-add-quote-details',
  templateUrl: './add-quote-details.component.html',
  styleUrls: ['./add-quote-details.component.css']
})
export class AddQuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  // tslint:disable-next-line: typedef
  quoteComplete(complete: boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
  }

}
