import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';
import drills from '../../../assets/data/drill.json';
import sentence from '../../../assets/data/sentence.json';
import paragraph from '../../../assets/data/paragraph.json';
import { KeyboardService } from './keyboard.service';
import { PalmService } from './palm.service';

@Injectable({
  providedIn: 'root',
})
export class DrillService {
  private drillList = new BehaviorSubject<string[]>([]);
  private activeDrillIndex = new BehaviorSubject<number>(0);

  public drillList$ = this.drillList.asObservable();
  public activeDrillIndex$ = this.activeDrillIndex.asObservable();
  public drillLength$ = this.drillList$.pipe(map((v) => v.length));
  public drill$ = this.activeDrillIndex$.pipe(
    map((v) => this.drillList.value[v])
  );

  constructor(
    private keyboardService: KeyboardService,
    private palmService: PalmService
  ) {}

  public loadDrillSet(mode: string) {
    switch (mode) {
      case 'course':
        this.drillList.next(drills);
        break;
      case 'sentence':
        this.drillList.next(sentence);
        break;
      case 'paragraph':
        this.drillList.next(paragraph);
        break;

      default:
        break;
    }
  }

  public nextDrill() {
    if (this.activeDrillIndex.value + 1 > this.drillList.value.length) {
      return;
    }
    this.activeDrillIndex.next(this.activeDrillIndex.value + 1);
  }

  public prevDrill() {
    if (this.activeDrillIndex.value - 1 < 0) {
      return;
    }
    this.activeDrillIndex.next(this.activeDrillIndex.value - 1);
  }

  public setDrillIndex(index: number) {
    if (index < 0 || index >= this.drillList.value.length) {
      return;
    }
    this.activeDrillIndex.next(index);
  }

  public getActiveDrill(): string {
    return this.drillList.value[this.activeDrillIndex.value];
  }
}
