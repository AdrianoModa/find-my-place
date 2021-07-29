import { FindPlaceComponent } from './pages/find-place/find-place.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'find-place', component: FindPlaceComponent },
  { path: '', redirectTo: 'find-place', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
