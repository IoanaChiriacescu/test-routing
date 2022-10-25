import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';
import { FirstActivateGuard } from './services/first-activate.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'first', component: FirstComponent, canActivate: [FirstActivateGuard] },
  { path: 'second/:id', component: SecondComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, //wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
