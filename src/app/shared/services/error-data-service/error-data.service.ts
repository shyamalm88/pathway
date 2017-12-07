import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Message } from 'primeng/components/common/api';
import * as _ from 'lodash';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class ErrorDataService {
  private error$ = new BehaviorSubject<any>(null);

  constructor(private messageService: MessageService) { }

  sendErrorData(value: any) {
    this.error$.next(value);
  }

  getErrorData() {
    return this.error$.asObservable();
  }

  clearErrorData() {
    this.error$.next(null);
  }

  showError() {
    let error = '';
    this.getErrorData()
      .subscribe((err) => {
        if (err) {
          console.log('error status: ' + err.status);
          if (err.status === 404) {
            error = err.status + ' Not Found Error.';
          } else if (err.status === 400) {
            error = err.status + ' Syntax Error.';
          } else if (err.status === 401) {
            error = err.status + ' Authorization Error.';
          } else if (err.status === 403) {
            error = err.status + ' Authorization Forbiden Error.';
          } else if (err.status >= 500) {
            error = err.status + ' Internal Server Error.';
          }
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: error });
        }
      });
  }

  private clearError() {
    this.messageService.clear();
  }
}
