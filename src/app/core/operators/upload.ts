import { Observable, scan } from "rxjs"
import { uploadType } from "../models/types/upload"
import { HttpEvent } from "@angular/common/http"
import { isHttpProgressEvent, isHttpResponse } from "../utils/http"

export function upload(): (
    source: Observable<any>
  ) => Observable<uploadType> {
    const initialState: uploadType = { state: 'PENDING', progress: 0 }
    const calculateState = (upload: uploadType, event: HttpEvent<unknown>): uploadType => {
      if (isHttpProgressEvent(event)) {
        return {
          progress: event.total
            ? Math.round((100 * event.loaded) / event.total)
            : upload.progress,
          state: 'IN_PROGRESS',
        }
      }
      if (isHttpResponse(event)) {
        return {
          progress: 100,
          state: 'DONE',
        }
      }
      return upload
    }
    return (source) => source.pipe(scan(calculateState, initialState))
  }
  