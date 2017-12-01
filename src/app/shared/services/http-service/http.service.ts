/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }

  // Fetch all existing comments
  getData(URL: string): Observable<any[]> {
    // using get request
    return this.http.get(URL)
      // and calling .json() on the response to return data
      .map((res: Response) => res.json())
      // errors if any
      .catch((error: any) => {
        return Observable.throw(error);
      });

  }

  // Add a new comment
  addData(URL: string, body: Object): Observable<any[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(URL, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => {
        return Observable.throw(error);
      }); // ...errors if any
  }

  // Update a comment
  editData(URL: string, body: Object): Observable<any[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(`${URL}/${body['id']}/`, body, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => {
        return Observable.throw(error);
      }); // ...errors if any
  }
  // Delete a comment
  deleteData(URL: string, id: string): Observable<Comment[]> {
    return this.http.delete(`${URL}/${id}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => {
        return Observable.throw(error);
      }); // ...errors if any
  }
}
