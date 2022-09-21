import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './core/components/toast/toast.component';
import { MessageComponent } from './core/components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
