import { EmitterSubscription, NativeEventEmitter } from 'react-native';

export type Orientation = 'landscape' | 'portrait';

export type OrientationEvent = 'onOrientationChanged';

export interface IOrientationManager {
  getOrientation(): Promise<Orientation>;
  getOrientationSynchronously(): Orientation;
}

export interface IOrientationEventManager extends NativeEventEmitter {
  addListener(
    eventType: OrientationEvent,
    listener: (value: Orientation) => void,
  ): EmitterSubscription;
}
