import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  currentAuthor: any;
  allQuotes: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCurrentAuthor();
  }

  getCurrentAuthor() {
    let observable = this._httpService.getAuthorById(this._route.params['value'].id);
    observable.subscribe(data => {
      this.currentAuthor = data['data'][0];
      this.allQuotes = data['data'][0].quotes;
      // console.log(data['data'][0].quotes);
   });
  }

  voteUp(quote, authorId) {
    let observable = this._httpService.upvoteByQuoteId(quote, authorId);
    let observable2 = this._httpService.getAuthorById(this._route.params['value'].id);
    observable.subscribe(data => {
      
   });
    observable2.subscribe(data => {
      this.allQuotes = data['data'][0].quotes;
   });
  }

  voteDown(quote, authorId) {
    let observable = this._httpService.downvoteByQuoteId(quote, authorId);
    let observable2 = this._httpService.getAuthorById(this._route.params['value'].id);
    observable.subscribe(data => {
      
   });
    observable2.subscribe(data => {
      this.allQuotes = data['data'][0].quotes;
   });
  }

  deleteQuote(quote, authorId) {
    let observable = this._httpService.deleteAuoteByAuthorId(quote, authorId);
    let observable2 = this._httpService.getAuthorById(this._route.params['value'].id);
    observable.subscribe(data => {
      
   });
    observable2.subscribe(data => {
      this.allQuotes = data['data'][0].quotes;
   });
  }
}
