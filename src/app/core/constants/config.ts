import { indexType } from "@core/models/types";

export const APP_CONFIG: indexType = {
    timeOut : 10000,
    expireCache: 30000,
    fileSize: 2000000, // 2mb
    accessTokenKey: 'access_token',
    refreshTokenKey: 'refresh_token',
    expireTokenKey: 'expire_token',
    userInfoKey: 'user_info'
}

