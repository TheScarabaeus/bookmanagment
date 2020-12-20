import { EventEmitter, Injectable } from '@angular/core';

/**
 * Service that provides subscribable event emitters to emit events across other
 * services, guards and components.
 */
@Injectable({
  providedIn: 'root',
})
export class EventService {
  /** Emits an event when the token has changed. */
  tokenHasChanged = new EventEmitter();

  constructor() {}
}
