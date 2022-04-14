import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorBoxComponent } from '@app/components/errorbox/errorbox.component';
import { MsgBoxComponent } from '@app/components/msgbox/msgbox.component';
import { RetryBoxComponent } from '@app/components/retrybox/retrybox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorBoxComponent,
    MsgBoxComponent,
    RetryBoxComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule { }
