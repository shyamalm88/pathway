import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CreateBoardModalService {
  private state$ = new BehaviorSubject<boolean>(null);

  constructor() { }

  createModal(value: boolean) {
    console.log(value);
    this.state$.next(value);
  }

  openModal() {
    return this.state$.asObservable();
  }

  clearData() {
    this.state$.next(null);
  }

}
