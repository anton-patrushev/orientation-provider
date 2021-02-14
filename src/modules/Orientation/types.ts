import { EmitterSubscription, NativeEventEmitter } from 'react-native';

export type Orientation = 'landscape' | 'portrait';

export type OrientationEvent = 'onOrientationChanged';

export type OnOrientationChangedEvent = {
  orientation: Orientation;
};

export interface IOrientationManager {
  getOrientation(): Promise<Orientation>;
  getOrientationSynchronously(): Orientation;
}

export interface IOrientationEventManager extends NativeEventEmitter {
  addListener(
    eventType: OrientationEvent,
    listener: (event: OnOrientationChangedEvent) => void,
  ): EmitterSubscription;
}
