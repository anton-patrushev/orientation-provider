import { useEffect, useState } from 'react';
import { OrientationManager } from '../core';
import { Orientation } from '../types';
import { subscribeToOrientationChanged } from './utils';

export function useOrientation(): Orientation {
  const initialOrientation = OrientationManager.getOrientationSynchronously();

  const [orientation, setOrientation] = useState<Orientation>(
    initialOrientation,
  );

  useEffect(() => {
    return subscribeToOrientationChanged(setOrientation);
  }, []);

  return orientation;
}
