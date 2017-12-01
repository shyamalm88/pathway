import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../shared/services/http-service/http.service';
import { ErrorDataService } from '../shared/services/error-data-service/error-data.service';

@Component({
  selector: 'app-active-sprint',
  templateUrl: './active-sprint.component.html',
  styleUrls: ['./active-sprint.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActiveSprintComponent implements OnInit {

  constructor(private http: HttpService, private error: ErrorDataService) { }

  ngOnInit() {
  }

}
