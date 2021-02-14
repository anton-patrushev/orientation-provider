import { OrientationEvents } from '../core/events';
import {
  OnOrientationChangedEvent,
  Orientation,
  OrientationEvent,
} from '../types';

function subscribeToOrientationEvent(
  eventName: OrientationEvent,
  listener: (value: Orientation) => void,
) {
  const handleOrientationEvent = (event: OnOrientationChangedEvent) => {
    listener(event.orientation);
  };

  const { remove } = OrientationEvents.addListener(
    eventName,
    handleOrientationEvent,
  );

  return remove;
}

export function subscribeToOrientationChanged(
  listener: (value: Orientation) => void,
) {
  subscribeToOrientationEvent('onOrientationChanged', listener);
}
