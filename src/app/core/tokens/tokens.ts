import { HttpContextToken } from "@angular/common/http";
import { InjectionToken } from "@angular/core";

export const API_URL = new InjectionToken<string>('api backend url');

export const TIME_OUT = new HttpContextToken<number>(() => 10000);

export const CACHING_ENABLED = new HttpContextToken<boolean>(() => false);

export const EXPIRE_CACHE = new HttpContextToken<number>(() => new Date().getTime() + 30000);