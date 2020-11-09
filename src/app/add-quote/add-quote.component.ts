import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  quote: Quotes[] = [
    new Quotes('You must be the change you wish to see in the world.', 'Live for what’s worth dying for, and leverage technology to create the world you wish to see.', 'Gandhi', new Date(2022, 1, 15)),
    new Quotes('A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.', 'Experiments are necessary for the experiences that create growth and new opportunities.', 'George Bernhard Shaw', new Date(2023, 6, 21)),
    new Quotes('Love is a verb. Love — the feeling — is a fruit of love, the verb.', 'Love has been mistaken for possession and attachment. Become loving, so you can love all', 'Stephen Covey', new Date(2034, 7, 25)),
    new Quotes('In seeking happiness for others, you will find it in yourself.', 'Don’t search for what you’re passionate about, serve others to make yourself passionate.', 'John mariga', new Date(2024, 5, 15)),

  ];

  // tslint:disable-next-line: typedef
  addNewQuotes(goal: any){
    const quoteLength = this.quote.length;
    goal.id = quoteLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.quote.push(goal);
  }

  // tslint:disable-next-line: typedef
  like(index) {
    this.quote[index].like++;
  }
  // tslint:disable-next-line: typedef
  dislike(index) {
    this.quote[index].dislike++;
  }

  // tslint:disable-next-line: typedef
  completeQuote(isComplete, index){
    if (isComplete){
      this.quote.splice(index, 1);
    }
  }
  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
