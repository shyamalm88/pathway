import { Component, OnInit } from '@angular/core';
import { ErrorDataService } from './shared/services/error-data-service/error-data.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser/';
import { TitleService } from './shared/services/title-service/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private error: ErrorDataService,
    private title: TitleService,
) { }

  ngOnInit() {
    this.error.showError();
    this.title.setTitle();

  }





}


