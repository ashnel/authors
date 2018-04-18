import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  addNewAuthor (author) {
    return this._http.post('/add', author);
  }

  getAllAuthors () {
    return this._http.get('/authors');
  }

  getAuthorById (author_id) {
    return this._http.get('/author/' + author_id);
  }

  updateAuthorById (author_id, author) {
    return this._http.put('/update/' + author_id, author);
  }

  deleteAuthor (author_id) {
    return this._http.delete('/delete/' + author_id);
  }

  addQuoteByAuthorId (author_id, quote) {
    // console.log('in service', quote, author_id);
    return this._http.put('/add_quote/' + author_id, quote);
  }

  upvoteByQuoteId(quote, authorId) {
    return this._http.put('/upvote/' + authorId, quote);
  }

  downvoteByQuoteId(quote, authorId) {
    return this._http.put('/downvote/' + authorId, quote);
  }

  deleteAuoteByAuthorId(quote, authorId) {
    return this._http.put('/delete_quote/' + authorId, quote);
  }
}
