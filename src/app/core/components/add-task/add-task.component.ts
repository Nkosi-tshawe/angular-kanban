import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef } from '../../services/dialog/dialog-ref';
import { DIALOG_DATA } from '../../services/dialog/dialog-token';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: string
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
