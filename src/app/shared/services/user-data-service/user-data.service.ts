import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserDataService {
  private state$ = new BehaviorSubject<any>(null);

  constructor() { }

  sendData(value: any) {
    this.state$.next(value);
  }

  getData() {
    return this.state$.asObservable();
  }

  clearData() {
    this.state$.next(null);
  }

}
