import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog/dialog.service';
import { AddTagComponent } from '../add-tag/add-tag.component';

interface TagData {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  tagList: TagData[] = [
    { id: 1, name: 'Bug', color: 'red' },
    { id: 2, name: 'Feature request', color: 'green' },
    { id: 3, name: 'Marketing', color: 'yellow' },
    { id: 4, name: 'V2.0', color: 'blue' },
    { id: 5, name: 'Enhancement', color: 'green' },
    { id: 6, name: 'Design', color: 'purple' },
  ];
  constructor(private dialogRef: DialogService) {}

  ngOnInit(): void {
    // this.dialogRef.open(AddTagComponent, { data: '' });
  }

  openNewTag() {
    this.dialogRef.open(AddTagComponent, { data: '' });
  }
}
