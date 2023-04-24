import { NgModule, isDevMode, APP_INITIALIZER } from '@angular/core';
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
import { QuarModule } from '@altack/quar';

import { CheckForUpdateService } from './services/check-for-update-service/check-for-update.service';
import { LogUpdateService } from './services/log-update-service/log-update.service';
import { PromptUpdateService } from './services/prompt-update-service/prompt-update.service';
import { PromptInstallComponent } from './components/prompt-install/prompt-install.component';
import { PromptNotificationService } from './services/prompt-notification-service/prompt-notification.service';
import { QrReaderComponent } from './components/qr-reader/qr-reader.component';


const initializer = (promptNotificationService: PromptNotificationService) => () => promptNotificationService.initPwaPrompt();

@NgModule({
  declarations: [
    AppComponent,
    IdViewComponent,
    TopBarComponent,
    PromptInstallComponent,
    QrReaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    QuarModule,
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
  entryComponents: [
    PromptInstallComponent,
  ],
  providers: [
    CheckForUpdateService,
    LogUpdateService,
    PromptUpdateService,
    { provide: APP_INITIALIZER, useFactory: initializer, deps: [PromptNotificationService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
