import { HttpClient, HttpEvent, HttpResponse, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, scan } from 'rxjs';
import { download } from '../../operators/download';
import { HttpProxyService } from '../proxy-service/http-proxy.service';
import { downloadType } from '@core/models/types/download';

@Injectable({
  providedIn: 'root'
})
export class DownloadService extends HttpProxyService {
  constructor(
    protected override http : HttpClient,
  ) {
    super(http);
   }

  download(url: string, fileName: string): Observable<downloadType> {
    // use proxy service instead of HttpClient
    return this.get(url, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    }).pipe(download(blob => completeDownload(blob, fileName)))
  }

}

function completeDownload(blob: Blob, fileName: string){
  const a = document.createElement('a')
  const objectUrl = URL.createObjectURL(blob)
  a.href = objectUrl
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(objectUrl);
}

