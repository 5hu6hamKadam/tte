import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  private nextKey = new BehaviorSubject<string>('');
  public nextKey$ = this.nextKey.asObservable();

  constructor() {}

  public setNextKey(char: string) {
    this.nextKey.next(char);
  }
}
