import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EditItemService {

  constructor(private http:HttpClient) { }

  getItemInfo(reservation_id:string):Observable<any>{
    const url = `http://192.168.49.2:30016/obtener-reserva//?reservation_id=${reservation_id}`;
    return this.http.get<any>(url);
  }

  editReservation(schedule:any){
    console.log(schedule)
    const url = `http://192.168.49.2:30012/editar-reserva`;
    const json= {
      token:localStorage.getItem('token'),
      data:schedule
    }
    return this.http.post<any>(url, schedule).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
