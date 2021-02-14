import { NativeEventEmitter } from 'react-native';

import { OrientationEventEmitter } from './modules';
import { IOrientationEventManager } from '../types';

export const OrientationEvents: IOrientationEventManager = new NativeEventEmitter(
  OrientationEventEmitter,
);
