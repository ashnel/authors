import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log('delete');
    this.deleteAuthorById();
  }

  deleteAuthorById () {
    console.log(this._route.params['value'].id);
    let observable = this._httpService.deleteAuthor(this._route.params['value'].id);
    observable.subscribe(data => {
   });
    this._router.navigate(['/home']);
  }
}
