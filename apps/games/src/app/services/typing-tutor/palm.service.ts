import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PalmService {
  private nextFinger = new BehaviorSubject<number>(1);
  public nextFinger$ = this.nextFinger.asObservable();

  constructor() {}

  public setNextFinger(char: string) {
    if (!char) {
      return;
    }
    const fingers = [
      [1, '!', 'Q', 'A', 'Z'],
      [2, '@', 'W', 'S', 'X'],
      [3, '#', 'E', 'D', 'C'],
      [4, '$', 'R', 'T', 'F', 'G', 'V', 'B'],
      [' '],
      [' '],
      [4, '$', 'Y', 'U', 'H', 'J', 'N', 'M'],
      [5, '%', 'I', 'K', ','],
      [7, '&', 'O', 'L', '.'],
      [
        0,
        'P',
        ';',
        '/',
        '-',
        '[',
        ']',
        '{',
        '}',
        "'",
        '=',
        '/',
        '\\',
        '|',
        '?',
      ],
    ];

    const index = fingers.findIndex((v) => v.includes(char.toUpperCase())) + 1;
    this.nextFinger.next(index);
  }
}
