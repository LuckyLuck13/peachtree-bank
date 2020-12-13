import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

type FloatLabelOptions = 'always' | 'auto';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss']
})
export class InputControlComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() inputClass = 'field300'
  @Input() floatLabel: FloatLabelOptions = 'auto';
  @Input() placeholder: string;
  @Input() prefix: string;

  constructor() { }

  ngOnInit(): void {
    this.control.disabled
  }

  clearValue(): void {
    this.control.setValue('', { onlySelf: false, emitEvent: true });
  }

}
