import {Component, OnInit, ViewChild} from '@angular/core';
import {Options} from 'fullcalendar';
import {CalendarService} from './calendar.service';
import {CalendarEvent} from '../_lib/CalendarEvent';
import {CalendarComponent} from 'ng-fullcalendar';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class EventsCalendarComponent implements OnInit {

    public calendarOptions: Options;

    @ViewChild(CalendarComponent) public ucCalendar: CalendarComponent;

    public constructor(private calendarService: CalendarService) {

    }

    public ngOnInit() {

        this.calendarService.getEvents().subscribe((result: Array<CalendarEvent>) => {

            console.log(result);

            this.calendarOptions = {

                editable: true,
                eventLimit: false,
                header: {

                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listMonth'

                },

                events: result

            };

        });


    }

}
