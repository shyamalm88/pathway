import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TitleService } from '../shared/services/title-service/title.service';
import { AuthService } from '../shared/services/auth-service/auth.service';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  templateUrl: 'scrum.component.html'
})
export class ScrumComponent implements OnInit {
  constructor(private title: TitleService, private auth: AuthService, private router: Router) {}
  public items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  ngOnInit(): void {
    this.title.setTitle();
  }
}
