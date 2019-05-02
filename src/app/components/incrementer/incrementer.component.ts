import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {
  @Input() caption: string = 'Caption';
  @Input() percent: number = 50;
  @Output() changePercent: EventEmitter<number> = new EventEmitter();
  @ViewChild('valuePercent') valuePercent: ElementRef;
  constructor() {
  }
  ngOnInit() {
  }
  changeValue(value: number): void {
    if ((this.percent > 0 || value > 0) && (this.percent < 100 || value < 0)) {
      this.percent = this.percent + value;
      this.changePercent.emit(this.percent);
    }
    this.valuePercent.nativeElement.focus();
  }

  onChange(nValue: number) {
    if (nValue < 0 || nValue == null) {
      nValue = 0;
    } else if (nValue > 100) {
      nValue = 100;
    }
    this.percent = nValue;
    this.valuePercent.nativeElement.value = Number(this.percent)
    this.changePercent.emit(this.percent);
  }
}
