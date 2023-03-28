import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { IdViewComponent } from './components/id-view/id-view.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './material.modules';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';

import { CheckForUpdateService } from './services/check-for-update-service/check-for-update.service';
import { LogUpdateService } from './services/log-update-service/log-update.service';
import { PromptUpdateService } from './services/prompt-update-service/prompt-update.service';

@NgModule({
  declarations: [
    AppComponent,
    IdViewComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule
  ],
  providers: [
    CheckForUpdateService,
    LogUpdateService,
    PromptUpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
