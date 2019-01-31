import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import {RouterModule} from '@angular/router';

// import {HomeComponent} from '../home/home.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
      RouterModule.forChild([

          {

              path: 'calendar',
              component: CalendarComponent

          }, {

              path: '',
              pathMatch: 'full',
              redirectTo: 'home'

          }

      ])
  ]
})
export class CalendarModule { }
