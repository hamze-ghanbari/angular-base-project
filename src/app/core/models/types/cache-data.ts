import { HttpResponse } from "@angular/common/http";

export type cacheDataType = {
    response: HttpResponse<any>,
    expire: number
};