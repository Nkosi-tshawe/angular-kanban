import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './core/components/toast/toast.component';
import { MessageComponent } from './core/components/message/message.component';
import { AddTaskComponent } from './core/components/add-task/add-task.component';
import { AddTagComponent } from './core/components/add-tag/add-tag.component';
import { DropdownSelectComponent } from './core/components/dropdown-select/dropdown-select.component';
import { AddLaneComponent } from './core/components/add-lane/add-lane.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColorSelectComponent } from './core/components/color-select/color-select.component';
@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    MessageComponent,
    AddTaskComponent,
    AddTagComponent,
    DropdownSelectComponent,
    AddLaneComponent,
    ColorSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OverlayModule,
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
