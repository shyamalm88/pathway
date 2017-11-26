import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-scrum-detail',
  templateUrl: './scrum-detail.component.html',
  styleUrls: ['./scrum-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrumDetailComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public fileOverBase(e: any): void {
    console.log(this.uploader);
    this.hasBaseDropZoneOver = e;
  }

}
