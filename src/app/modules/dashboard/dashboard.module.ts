import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { TagComponent } from 'src/app/core/components/tag/tag.component';
import { TasksComponent } from '../../core/components/tasks/tasks.component';
import { UsersComponent } from '../../core/components/users/users.component';
import { AddTaskComponent } from '../../core/components/add-task/add-task.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    TagComponent,
    TasksComponent,
    UsersComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
