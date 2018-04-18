import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentAuthor: any;
  errors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.errors;
    this.getCurrentAuthor();
  }

  getCurrentAuthor() {
    let observable = this._httpService.getAuthorById(this._route.params['value'].id);
    observable.subscribe(data => {
      this.currentAuthor = data['data'][0];
   });
  }

  updateAuthor () {
    let observable = this._httpService.updateAuthorById(this._route.params['value'].id, this.currentAuthor);
    observable.subscribe(data => {
      if (data['message'] == 'bad') {
        this.errors = "The author's name must be at least 3 characters long.";
      }
      else {
        this._router.navigate(['/home']);
      }
   });
  }
}
