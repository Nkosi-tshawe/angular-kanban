import { Component, OnInit } from '@angular/core';
import { AddLaneComponent } from 'src/app/core/components/add-lane/add-lane.component';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dialogRef: DialogService) {}

  openNewLane() {
    const dialogRef = this.dialogRef.open(AddLaneComponent, { data: '' });
  }

  ngOnInit(): void {}
}
