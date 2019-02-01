import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CalendarEvent} from '../_lib/CalendarEvent';
import {Pageable} from '@ngxux/common';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    public constructor(private httpClient: HttpClient) {


    }

    public getEvents(): Observable<Pageable<CalendarEvent>> {

        return this.httpClient.get<Pageable<CalendarEvent>>('http://localhost:8080/events');

    }


}
