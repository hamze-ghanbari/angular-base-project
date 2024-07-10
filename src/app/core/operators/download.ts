import { HttpEvent, HttpResponse, HttpEventType, HttpProgressEvent } from "@angular/common/http"
import { Observable, scan } from "rxjs"
import { downloadType } from "../models/types/download"
import { isHttpProgressEvent, isHttpResponse } from "../utils/http"

export function download(
    saver?: (b: Blob) => void
  ): (source: Observable<HttpEvent<Blob>>) => Observable<downloadType> {
    return (source: Observable<HttpEvent<Blob>>) =>
      source.pipe(
        scan((previous: downloadType, event: HttpEvent<Blob>): downloadType => {
            if (isHttpProgressEvent(event)) {
              return {
                progress: event.total
                  ? Math.round((100 * event.loaded) / event.total)
                  : previous.progress,
                state: 'IN_PROGRESS',
                loaded: Math.round(event.loaded / 1000000),
                total: Math.round(event.total! / 1000000),
                content: null
              }
            }
            if (isHttpResponse(event)) {
              if (saver && event.body) {
                saver(event.body)
              }
              return {
                progress: 100,
                state: 'DONE',
                content: event.body
              }
            }
            return previous
          },
          {state: 'PENDING', progress: 0, loaded: 0, total: 0, content: null}
        )
      )
  }
 