import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, scan } from 'rxjs';
import { upload } from '../../operators/upload';
import { HttpProxyService } from '../proxy-service/http-proxy.service';
import { uploadType } from '@core/models/types/upload';

@Injectable({
  providedIn: 'root'
})
export class UploadService extends HttpProxyService{

  constructor(protected override http: HttpClient) {
    super(http);
  }
 
 
  upload(url: string, file: Object): Observable<uploadType> {
    const data = new FormData()
    data.append('file', file as File)
    return this.post(url, data)
      .pipe(upload())
  }
}
 
 

