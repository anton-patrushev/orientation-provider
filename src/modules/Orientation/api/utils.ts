import { OrientationEvents } from '../core/events';
import { Orientation, OrientationEvent } from '../types';

function subscribeToOrientationEvent(
  eventName: OrientationEvent,
  listener: (value: Orientation) => void,
) {
  const { remove } = OrientationEvents.addListener(eventName, listener);

  return remove;
}

export function subscribeToOrientationChanged(
  listener: (value: Orientation) => void,
) {
  subscribeToOrientationEvent('onOrientationChanged', listener);
}
