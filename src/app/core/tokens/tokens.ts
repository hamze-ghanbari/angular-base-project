import { HttpContextToken } from "@angular/common/http";
import { InjectionToken } from "@angular/core";
import { APP_CONFIG } from "@core/constants/config";
import { MESSAGES } from "@core/constants/messages";

export const API_URL = new InjectionToken<string>('api backend url');

export const TIME_OUT = new HttpContextToken<number>(() => 10000);

export const CACHING_ENABLED = new HttpContextToken<boolean>(() => true);

export const EXPIRE_CACHE = new HttpContextToken<number>(() => new Date().getTime() + 30000);

export const APP_CONFIGS = new HttpContextToken<any>(() => 'app config');

export const ERROR_MESSAGES = new HttpContextToken<any>(() => 'validation messages');