import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  newAuthor: any;
  errors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newAuthor = { name: ""};
    this.errors;
  }

  addNewAuthor() {
    let observable = this._httpService.addNewAuthor(this.newAuthor);
    observable.subscribe(data => {
      if (data['message'] == 'bad') {
        this.errors = "The author's name must be at least 3 characters long.";
      }
      else {
        this.newAuthor = { name: ""};
        this._router.navigate(['/home']);
      }
   });
  }
}
