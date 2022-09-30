import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog/dialog.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private dialogRef: DialogService) {}

  openNewTask() {
    this.dialogRef.open(AddTaskComponent, { data: '' });
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
}
