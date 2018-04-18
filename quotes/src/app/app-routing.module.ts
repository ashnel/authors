import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

const routes: Routes = [
  { path: 'newauthor',component: NewauthorComponent },
  { path: 'home',component: HomeComponent },
  { path: 'edit/:id',component: EditComponent },
  { path: 'delete/:id',component: DeleteComponent },
  { path: 'quotes/:id',component: QuotesComponent },
  { path: 'add-quote/:id',component: AddQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
