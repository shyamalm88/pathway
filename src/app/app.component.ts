import { Component, OnInit } from '@angular/core';
import { ErrorDataService } from './shared/services/error-data-service/error-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private error: ErrorDataService) { }

  ngOnInit() {
    this.error.showError();
  }


}
