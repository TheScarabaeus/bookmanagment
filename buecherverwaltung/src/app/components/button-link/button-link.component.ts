import { Component, OnInit, Input } from '@angular/core';

/**
 * Component that provides a link as a button with different types, variants and
 * sizes.
 */
@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css'],
})
export class ButtonLinkComponent implements OnInit {
  @Input() routerLink: string = '';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() width: 'normal' | 'full' = 'normal';

  constructor() {}

  ngOnInit(): void {}
}
