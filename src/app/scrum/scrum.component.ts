import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  templateUrl: 'scrum.component.html',
})
export class ScrumComponent implements OnInit {
  
  public items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];


  ngOnInit(): void {
  }


}
