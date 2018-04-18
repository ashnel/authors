import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  currentAuthor: any;
  errors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCurrentAuthor();
    this.errors;
  }

  getCurrentAuthor() {
    let observable = this._httpService.getAuthorById(this._route.params['value'].id);
    observable.subscribe(data => {
      this.currentAuthor = data['data'][0];
   });
  }

  addNewQuote () {
    let observable = this._httpService.addQuoteByAuthorId(this._route.params['value'].id, this.currentAuthor);
    observable.subscribe(data => {
      if (data['message'] == 'bad') {
        this.errors = "The quote must be at least 3 characters long.";
      }
      else {
        this._router.navigate(['/quotes/' + this.currentAuthor._id]);
      }
   });
  }
}
