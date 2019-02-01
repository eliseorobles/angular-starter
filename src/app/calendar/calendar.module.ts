import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsCalendarComponent} from './events-calendar.component';
import {RouterModule} from '@angular/router';
import {FullCalendarModule} from 'ng-fullcalendar';
import {HttpClientModule} from '@angular/common/http';

// import {HomeComponent} from '../home/home.component';

@NgModule({

    declarations: [

        EventsCalendarComponent

    ],

    imports: [

        CommonModule,
        FullCalendarModule,
        HttpClientModule,

        RouterModule.forChild([

            {

                path: 'calendar',
                component: EventsCalendarComponent

            }, {

                path: '',
                pathMatch: 'full',
                redirectTo: 'home'

            }

        ])

    ]

})
export class CalendarModule {
}
