import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CalendarEvent} from '../_lib/CalendarEvent';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    public constructor(private httpClient: HttpClient) {


    }

    public getEvents(): Observable<Array<CalendarEvent>> {

        return this.httpClient.get<Array<CalendarEvent>>('http://localhost:4200/assets/events.json');

    }


}
