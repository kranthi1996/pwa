import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {NewsletterService} from './services/newsletter.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationModalComponent} from './modals/confirmation-modal.component';
//import {DialogComponent} from './modals/dialog-model';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule,MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    //DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents:[ConfirmationModalComponent],
  providers: [NewsletterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
