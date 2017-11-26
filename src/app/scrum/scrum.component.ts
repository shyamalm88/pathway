import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'scrum.component.html'
})
export class ScrumComponent implements OnInit {
  public oneAtATime: Boolean = true;
  public items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
  ngOnInit(): void {
  }
}
