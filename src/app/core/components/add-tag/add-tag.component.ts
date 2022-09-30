import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef } from '../../services/dialog/dialog-ref';
import { DIALOG_DATA } from '../../services/dialog/dialog-token';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss'],
})
export class AddTagComponent implements OnInit {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
