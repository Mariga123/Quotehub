import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  quote: Quotes[] = [
    new Quotes('You must be the change you wish to see in the world.', 'Live for what’s worth dying for, and leverage technology to create the world you wish to see.', 'Gandhi', '10/07/2121'),
    new Quotes('A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.', 'Experiments are necessary for the experiences that create growth and new opportunities.', 'George Bernhard Shaw', '10/06/2121'),
    new Quotes('Love is a verb. Love — the feeling — is a fruit of love, the verb.', 'Love has been mistaken for possession and attachment. Become loving, so you can love all', 'Stephen Covey', '10/08/2221'),
    new Quotes('In seeking happiness for others, you will find it in yourself.', 'Don’t search for what you’re passionate about, serve others to make yourself passionate.', 'John mariga', '01/02/2221'),

  ];
  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
