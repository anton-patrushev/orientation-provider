import { NativeModules } from 'react-native';

import { IOrientationManager } from './types';

const { OrientationManager } = NativeModules;

export default OrientationManager as IOrientationManager;
