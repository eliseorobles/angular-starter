import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AwesomeComponent} from './awesome.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [

      AwesomeComponent,

      ],
  imports: [
    CommonModule,

      RouterModule.forChild([

          {

              path: 'awesome',
              component: AwesomeComponent

          }

      ])

  ]

})
export class AwesomeModule { }
