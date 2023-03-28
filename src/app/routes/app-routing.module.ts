import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdViewComponent } from '../components/id-view/id-view.component';

const routes: Routes = [{ path: '**', component: IdViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
