import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newquote = new Quotes ('', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  // tslint:disable-next-line: typedef
  submitQuote(){
    this.addQuote.emit(this.newquote);
  }

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
