import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef } from '../../services/dialog/dialog-ref';
import { DIALOG_DATA } from '../../services/dialog/dialog-token';

@Component({
  selector: 'app-add-lane',
  templateUrl: './add-lane.component.html',
  styleUrls: ['./add-lane.component.scss'],
})
export class AddLaneComponent {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: string
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
