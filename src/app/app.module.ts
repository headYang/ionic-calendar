import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CustomEventTitleFormatterProvider } from '../providers/custom-event-title-formatter/custom-event-title-formatter';
import { CustomDataFormatterProvider } from '../providers/custom-data-formatter/custom-data-formatter';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, CalendarDateFormatter, CalendarEventTitleFormatter } from 'angular-calendar';
import  { CalendarWeekHoursViewModule } from 'angular-calendar-week-hours-view';

import locales from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(locales);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    CalendarModule.forRoot(),
    CalendarWeekHoursViewModule,
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomEventTitleFormatterProvider,
    CustomDataFormatterProvider
  ]
})
export class AppModule {}
