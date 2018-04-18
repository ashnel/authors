import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allAuthors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAuthors();
  }
  
  getAuthors() {
    let observable = this._httpService.getAllAuthors();
    observable.subscribe(data => {
      this.allAuthors = data['data'];
   });
  }

  deleteAuthorById(id) {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
   });
    let observable2 = this._httpService.getAllAuthors();
    observable2.subscribe(data => {
      this.allAuthors = data['data'];
   });
  }
}
