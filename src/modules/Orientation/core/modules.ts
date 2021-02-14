import { NativeModules } from 'react-native';

import { IOrientationManager } from '../types';

export const OrientationManager: IOrientationManager =
  NativeModules.OrientationManager;

export const OrientationEventEmitter = NativeModules.OrientationEventEmitter;
