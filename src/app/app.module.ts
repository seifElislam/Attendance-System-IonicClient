import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ScanResult } from '../pages/scan-result/scan-result';
import { Requset } from '../pages/requset/requset';
import { Tabs } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { ScanQR } from '../pages/scan-qr/scan-qr';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService} from '../providers/auth-service';
import { Attendance} from '../providers/attendance';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ScanQR,
    Requset,
    Tabs,
    Login,
    ScanResult
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ScanQR,
    Requset,
    Tabs,
    Login,
    ScanResult
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    Attendance,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
