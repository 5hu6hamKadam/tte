import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrillService } from '../../../services/typing-tutor/drill.service';

@Component({
  selector: 'tte-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private drillService: DrillService
  ) {}
  ngOnInit(): void {
    const mode = this.router.snapshot.params['mode'];

    this.drillService.loadDrillSet(mode);
  }
}
