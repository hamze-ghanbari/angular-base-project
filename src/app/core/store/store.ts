import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject, Observable, map, distinctUntilChanged } from "rxjs";

@Injectable({ providedIn: 'root' })
export abstract class Store<T> {
  private _state: BehaviorSubject<T>;

  constructor(@Inject('') initialState: T) {
    this._state = new BehaviorSubject<T>(initialState);
  }

  get state$(): Observable<T> {
    return this._state.asObservable();
  }

  get state(): T {
    return this._state.getValue();
  }

  setState<K extends keyof T, E extends Partial<Pick<T, K>>>(
    fn: (state: T) => E
  ): void {
    const state = fn(this.state);
    this._state.next({ ...this.state, ...state });
  }

  select<K>(selector: (state: T) => K): Observable<K> {
    return this.state$.pipe(map(selector), distinctUntilChanged());
  }
}