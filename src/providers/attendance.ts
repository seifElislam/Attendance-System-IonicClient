import { Injectable } from '@angular/core';
import { URLSearchParams,  RequestOptions,Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {AppSettings} from '../app-settings';

/*
  Generated class for the Attendance provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Attendance {

  constructor(public http: Http) {
    console.log('Hello Attendance Provider');
  }

  getAttendance(id: any, token: any, qrcode: any){
    let contentHeader = new Headers({"Content-Type": "application/json"});
    return this.http.post(AppSettings.API_ENDPOINT + '/api/attendances', { user_id: id, token: token, qrcode: qrcode })
            .map((response: Response) => {
              return response.json();
              // let data = response.json();
                //console.log("return :",user)
                //console.log("response :",response)


            });
  }

  getPermission(id: any, schedule_id: any){

    let searchUrl = AppSettings.API_ENDPOINT + '/api/permissions';
    let params = new URLSearchParams();

    params.set('user_id', id);
    params.set('schedule_id',schedule_id);
      //let options
     //options.heders = token;
     //options.search = params;
    return this.http
      .post(searchUrl,params)
      .map(response => response.json());
  }

  getSchedule(id:any, token: any){
     //return this.http.get(AppSettings.API_ENDPOINT + '/api/schedules/new?track_id=' + id).map((response: Response) => response.json());
    let searchUrl = AppSettings.API_ENDPOINT + '/api/schedules';
    let params = new URLSearchParams();

    params.set('track_id', id);
      //let options
     //options.heders = token;
     //options.search = params;
    return this.http
      .get(searchUrl,params)
      .map(response => response.json());
  }
  get_detalis(id:any){
     return this.http.get(AppSettings.API_ENDPOINT + '/api/attendances/' + id, ).map((response: Response) => response.json());
  }

  private jwt(token:any) {

    let headers = new Headers({'Authorization': 'Bearer ' + token});
    return new RequestOptions({headers: headers});

}

}
