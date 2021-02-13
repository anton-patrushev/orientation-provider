import React, { memo, useEffect } from 'react';
import { View } from 'react-native';

import { OrientationManager } from '@/modules/Orientation';

const App = () => {
  useEffect(() => {
    OrientationManager.getOrientation().then(console.log).catch();
    // console.log(OrientationManager.getOrientationSynchronously());
  }, []);
  return <View />;
};

export default memo(App);
