import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }

  getData(URL: string): Observable<any[]> {
    return this.http.get(URL)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error);
      });

  }

  postData(URL: string, body: Object): Observable<any[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(URL, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  editData(URL: string, body: Object): Observable<any[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${URL}/${body['id']}/`, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }


  deleteData(URL: string, id: string): Observable<Comment[]> {
    return this.http.delete(`${URL}/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}
