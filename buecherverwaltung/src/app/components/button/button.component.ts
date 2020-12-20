import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Component that provides a button with different types, variants and sizes.
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() width: 'normal' | 'full' = 'normal';
  @Input() isLoading: boolean = false;
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Handles the click event and emits it to the parent.
   *
   * @param {MouseEvent} e The event object.
   */
  handleClick = (e: MouseEvent): void => {
    this.onClick.emit(e);
  };
}
