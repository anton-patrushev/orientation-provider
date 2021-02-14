import React, { memo, FC } from 'react';
import { View } from 'react-native';

// import { OrientationManager } from '@/modules/Orientation';
// import { useOrientation } from '@/modules/Orientation';
import { Orientation } from '@/modules/Orientation/types';
import { withOrientation } from '@/modules/Orientation/api/hocs';

// const App = () => {
//   const orientation = useOrientation();

//   console.log(orientation);

//   return <View />;
// };

type Props = {
  orientation: Orientation;
};

const App: FC<Props> = ({ orientation }) => {
  console.log(orientation);

  return <View />;
};

export default memo(withOrientation(App));
