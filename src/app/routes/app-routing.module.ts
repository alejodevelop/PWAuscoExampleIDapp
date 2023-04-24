import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdViewComponent } from '../components/id-view/id-view.component';
import { QrReaderComponent } from '../components/qr-reader/qr-reader.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IdViewComponent },
  { path: 'qr-reader', component: QrReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
